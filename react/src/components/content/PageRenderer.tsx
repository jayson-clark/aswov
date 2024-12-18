import React, { Component } from "react";
import { PageData } from "../../types/PageData";
import { renderElement } from "./ElementRenderer";
import { getDocumentAsJSON } from "../../firebase";
import { ElementData } from "../../types/ElementData";

interface PageRendererState {
    /** Indicates whether the page data is being loaded. */
    loading: boolean;
    /** Indicates if there was an error fetching the data. */
    error: boolean;
    /** Holds the page data with its elements. */
    pageData: PageData;
}

interface PageRendererProps {
    /** The Firestore collection name. */
    collection: string;
    /** The Firestore document name. */
    document: string;
}

/**
 * PageRenderer Component
 *
 * A class-based component to fetch, manage, and render page data dynamically.
 */
class PageRenderer extends Component<PageRendererProps, PageRendererState> {
    constructor(props: PageRendererProps) {
        super(props);

        // Initialize state
        this.state = {
            pageData: { elements: [] },
            loading: false,
            error: false,
        };
    }

    /**
     * Fetch page data when the component mounts.
     */
    async componentDidMount() {
        try {
            this.setState({ loading: true, error: false });

            const data = await getDocumentAsJSON<PageData>(this.props.collection, this.props.document);
            if (data?.elements) {
                this.setData(data);
            } else {
                throw new Error("Page not found or invalid structure");
            }
        } catch (err) {
            console.error("Error fetching page data:", err);
            this.setState({ error: true });
        } finally {
            this.setState({ loading: false });
        }
    }

    /**
     * Adds a new element to the page.
     * @param newElement - The new element to add.
     */
    addElement = (newElement: ElementData) => {
        this.setState((prevState) => ({
            pageData: {
                ...prevState.pageData,
                elements: [...prevState.pageData.elements, newElement],
            },
        }));
    };

    /**
     * Updates an existing element in the page data.
     * @param updatedElement - The updated element to replace the old one.
     */
    updateElement = (updatedElement: ElementData) => {
        this.setState((prevState) => ({
            pageData: {
                ...prevState.pageData,
                elements: prevState.pageData.elements.map((el) =>
                    el.id === updatedElement.id ? updatedElement : el
                ),
            },
        }));
    };

    /**
     * Sets new page data.
     * @param newPageData - The new page data to replace the current data.
     */
    setData = (newPageData: PageData) => {
        this.setState({ pageData: newPageData });
    };

    render() {
        const { loading, error, pageData } = this.state;

        // Loading state
        if (loading) return <div>Loading...</div>;

        // Error state
        if (error) return <div>Error loading page data.</div>;

        // Create a map of elements by their ID
        const elementsById: Record<string, ElementData> = Object.fromEntries(
            pageData.elements.map((el) => [el.id, el])
        );

        // Filter top-level elements (elements without a parentId)
        const topLevelElements = pageData.elements.filter((el) => !el.parentId);

        return (
            <div className="page-container">
                {topLevelElements.map((element) =>
                    renderElement(element, elementsById)
                )}
            </div>
        );
    }
}

export default PageRenderer;
