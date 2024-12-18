import React from "react";
import PageRenderer from "../../content/PageRenderer";
import ContentViewport from "./ContentViewport";

/**
 * Props for the TopBar component.
 */
interface TopBarProps {
    /** Reference to the PageRenderer component. */
    pageRendererRef: React.RefObject<PageRenderer | null>;
    /** Reference to the ContentViewport component. */
    contentViewportRef: React.RefObject<ContentViewport | null>;
}

/**
 * TopBar Component
 *
 * Provides a toolbar with actions for setting viewport dimensions and managing the editor.
 *
 * @param {TopBarProps} props - The props containing references to the PageRenderer and ContentViewport components.
 * @returns A React component rendering the top bar actions.
 */
const TopBar: React.FC<TopBarProps> = ({ pageRendererRef, contentViewportRef }) => {
    /**
     * Updates the ContentViewport dimensions.
     * @param width - The new width for the viewport.
     * @param height - The new height for the viewport.
     */
    const setViewportDimensions = (width: number, height: number) => {
        if (contentViewportRef.current) {
            contentViewportRef.current.setWidth(width);
            contentViewportRef.current.setHeight(height);
        }
    };

    return (
        <div className="top-bar">
            <h3>Editor</h3>
            <div>
                <button onClick={() => setViewportDimensions(1200, 800)}>Desktop</button>
                <button onClick={() => setViewportDimensions(768, 1024)}>Tablet</button>
                <button onClick={() => setViewportDimensions(375, 667)}>Mobile</button>
            </div>
        </div>
    );
};

export default TopBar;
