import React, { useState, createRef } from "react";
import TopBar from "./layout/TopBar";
import Sidebar from "./layout/Sidebar";
import ContentViewport from "./layout/ContentViewport";
import PageRenderer from "../content/PageRenderer";
import "./EditorApp.css";

/**
 * EditorApp Component
 *
 * Provides a complete editor interface with a top bar, sidebar, and a content viewport.
 * Allows dynamic editing and rendering of page content.
 *
 * @returns The main editor application component.
 */
const EditorApp: React.FC = () => {
    // Refs for child components
    const pageRendererRef = createRef<PageRenderer>();
    const contentViewportRef = createRef<ContentViewport>();

    return (
        <div className="editor-container">
            {/* Top Bar */}
            <TopBar pageRendererRef={pageRendererRef} contentViewportRef={contentViewportRef} />

            {/* Main Content Area */}
            <div className="main-content">
                {/* Content Viewport */}
                <div className="content-viewport">
                    <ContentViewport ref={contentViewportRef}>
                        <PageRenderer ref={pageRendererRef} collection="pages" document="home" />
                    </ContentViewport>
                </div>

                {/* Sidebar */}
                <Sidebar pageRendererRef={pageRendererRef} contentViewportRef={contentViewportRef} />
            </div>
        </div>
    );
};

export default EditorApp;
