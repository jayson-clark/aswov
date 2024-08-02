import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';

const App = () => {
    // Trigger a resize event
    // This is a workaround for animations not triggering on page load
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
    }, []);

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>;
}

export default App;