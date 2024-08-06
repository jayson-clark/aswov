import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import OurStory from './pages/OurStory';
import WishTypes from './pages/WishTypes';
import WishesInTheWorks from './pages/WishesInTheWorks';
import SparklesOfJoy from './pages/SparklesOfJoy';
import PastWishes from './pages/PastWishes';
import GetInvolved from './pages/GetInvolved';
import Events from './pages/Events';
import Sponsors from './pages/Sponsors';
import Volunteers from './pages/Volunteers';

const App = () => {
    // Trigger a resize event
    // This is a workaround for animations not triggering on page load
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
    }, []);

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/wish-types" element={<WishTypes />} />
            <Route path="/wishes-in-the-works" element={<WishesInTheWorks />} />
            <Route path="/sparkles-of-joy" element={<SparklesOfJoy />} />
            <Route path="/past-wishes" element={<PastWishes />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/events" element={<Events />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/volunteers" element={<Volunteers />} />
        </Routes>
    </BrowserRouter>;
}

export default App;