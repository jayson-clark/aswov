import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

/**
 * Root entry point for the React application.
 *
 * Creates the React root and renders the App component
 * inside React's StrictMode for highlighting potential issues.
 */
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
