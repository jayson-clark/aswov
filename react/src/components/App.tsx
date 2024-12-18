import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageRenderer from "./content/PageRenderer";
import EditorApp from "./editor/EditorApp";

/**
 * App Component
 *
 * Main application component that sets up routing for the home page
 * and editor page.
 *
 * @returns A React component with routing for PageRenderer and EditorApp.
 */
const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* Home Route */}
                <Route
                    path="/"
                    element={
                        <PageRenderer collection="pages" document="home" />
                    }
                />
                {/* Editor Route */}
                <Route path="/edit" element={<EditorApp />} />
            </Routes>
        </Router>
    );
};

export default App;
