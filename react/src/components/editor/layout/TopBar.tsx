import React, { useRef, useState } from "react";
import { FaFileDownload, FaFileUpload, FaRegEye } from "react-icons/fa";
import PageRenderer from "../../content/PageRenderer";
import ContentViewport from "./ContentViewport";
import { MdMoreVert } from "react-icons/md";
import { LuUndo2, LuRedo2 } from "react-icons/lu";

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
    const [menuOpen, setMenuOpen] = useState(false);

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
            <h2 style={{margin: '0px'}}>ASWOV CMS</h2>
            <select>
                <option value={"Home"}>Home</option>
            </select>
            <div className="top-bar-buttons">
                <button title="Undo last action"><LuUndo2 /></button>
                <button title="Redo last action"><LuRedo2 /></button>
                <button title="Preview"><FaRegEye /></button>
                <button onClick={() => setMenuOpen(!menuOpen)} title="More">
                    <svg width="24" height="24" viewBox="0 0 24 24" focusable="false"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                </button>
                {menuOpen && (
                    <div
                        className="context-menu"
                        onMouseLeave={() => setMenuOpen(false)}
                    >
                        <ul style={{ listStyle: "none", margin: 0, padding: "8px 0" }}>
                            <li style={{ padding: "8px 16px", cursor: "pointer" }} onClick={handleImport}>
                                Import Page Data
                            </li>
                            <li style={{ padding: "8px 16px", cursor: "pointer" }} onClick={handleExport}>
                                Export Page Data
                            </li>
                        </ul>
                    </div>
                )}
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
