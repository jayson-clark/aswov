import React, { useState, useEffect } from 'react';
import { Element, renderElement } from './ElementRenderer';
import { getDocumentAsJSON } from '../../firebase';

/**
 * Interface representing the structure of page data.
 */
interface PageData {
    /** Array of elements to render on the page. */
    elements: Element[]; // Element includes properties like `id`, `parentId`, etc.
}

/**
 * Props for the PageRenderer component.
 */
interface PageRendererProps {
    /** Firestore collection name. */
    collection: string;
    /** Firestore document name. */
    document: string;
}

/**
 * PageRenderer Component
 * 
 * Fetches and renders a dynamic page structure from Firestore.
 *
 * @param {string} collection - The Firestore collection name.
 * @param {string} document - The specific document to fetch.
 * @returns A React component rendering the page content.
 */
const PageRenderer: React.FC<PageRendererProps> = ({ collection, document }) => {
    const [pageData, setPageData] = useState<PageData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    /**
     * Fetch page data from Firestore on component mount or when props change.
     */
    useEffect(() => {
        const fetchPageData = async () => {
            try {
                setLoading(true); // Set loading state
                const data = await getDocumentAsJSON<PageData>(collection, document);

                if (data?.elements) {
                    setPageData(data);
                } else {
                    throw new Error('Page not found or invalid structure');
                }
            } catch (err: any) {
                setError(err.message || 'An unknown error occurred'); // Handle errors
            } finally {
                setLoading(false); // Remove loading state
            }
        };

        fetchPageData();
    }, [collection, document]);

    // Loading state
    if (loading) return <div>Loading...</div>;
    // Error state
    if (error) return <div>Error: {error}</div>;
    // No content state
    if (!pageData?.elements) return <div>No content available</div>;

    /**
     * Create a lookup map for elements by their ID for easy access.
     */
    const elementsById: Record<string, Element> = Object.fromEntries(
        pageData.elements.map((el) => [el.id, el])
    );

    /**
     * Find top-level elements (elements without a `parentId`).
     */
    const topLevelElements = pageData.elements.filter((el) => !el.parentId);

    return (
        <div className="page-container">
            {topLevelElements.map((element) =>
                renderElement(element, elementsById) // Render each top-level element
            )}
        </div>
    );
};

export default PageRenderer;
