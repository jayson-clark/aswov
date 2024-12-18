import React, { useRef } from "react";
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
 * Provides a toolbar with actions for viewport resizing, and importing/exporting page data as JSON.
 */
const TopBar: React.FC<TopBarProps> = ({ pageRendererRef, contentViewportRef }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    /**
     * Exports the page data as a JSON file.
     */
    const handleExport = () => {
        pageRendererRef.current?.exportPageData();
    };

    /**
     * Triggers the file input to import JSON.
     */
    const handleImport = () => {
        fileInputRef.current?.click();
    };

    /**
     * Handles the file input change event to import JSON data.
     *
     * @param e - The file input change event.
     */
    const onFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            pageRendererRef.current?.importPageData(file);
        }
        // Reset the file input value to allow re-selection of the same file
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    /**
     * Updates the dimensions of the ContentViewport.
     *
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
                <button onClick={handleExport}>Export JSON</button>
                <button onClick={handleImport}>Import JSON</button>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="application/json"
                    style={{ display: "none" }}
                    onChange={onFileSelected}
                />
            </div>
        </div>
    );
};

export default TopBar;
