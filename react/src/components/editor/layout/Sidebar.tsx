import React from "react";
import PageRenderer from "../../content/PageRenderer";
import ContentViewport from "./ContentViewport";

/**
 * Props for the Sidebar component.
 */
interface SidebarProps {
    /** Reference to the PageRenderer component. */
    pageRendererRef: React.RefObject<PageRenderer | null>;
    /** Reference to the ContentViewport component. */
    contentViewportRef: React.RefObject<ContentViewport | null>;
}

/**
 * Sidebar Component
 *
 * Provides actions for interacting with the page, such as adding new elements.
 *
 * @param {SidebarProps} props - The props containing references to the PageRenderer and ContentViewport components.
 * @returns A React component rendering the sidebar actions.
 */
const Sidebar: React.FC<SidebarProps> = ({ pageRendererRef, contentViewportRef }) => {
    /**
     * Adds a new top-level element to the page.
     */
    const handleAddElement = () => {
        if (pageRendererRef.current) {
            pageRendererRef.current.addElement({
                id: String(Date.now()), // Generate a unique ID using the current timestamp
                type: "Text", // Default type for the new element
                content: "Hi there.", // Default content for the new element
            });
        }
    };

    return (
        <div className="sidebar">
            <h4>Actions</h4>
            {/* Button to Add Element */}
            <button onClick={handleAddElement}>Add Top-Level Element</button>
        </div>
    );
};

export default Sidebar;
