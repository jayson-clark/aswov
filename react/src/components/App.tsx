import React from 'react';
import PageRenderer from './content/PageRenderer';

/**
 * App Component
 *
 * Root component of the application that renders the PageRenderer
 * for a specific collection and document.
 *
 * @returns The main React component rendering dynamic page content.
 */
const App: React.FC = () => (
    <div>
        {/* Render the home page from the "pages" collection */}
        <PageRenderer collection="pages" document="home" />
    </div>
);

export default App;
