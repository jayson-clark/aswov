import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Header = ({ useScroll }) => {
    const [scrolledPast, setScrolledPast] = useState(false);

    useEffect(() => {
        if (useScroll) {
            const handleScroll = () => {
                const scrollY = window.scrollY;
                setScrolledPast(scrollY > 200);
            };

            window.addEventListener('scroll', handleScroll);

            // Cleanup event listener on component unmount
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [useScroll]);

    return <header className="wrapper">
        <nav className={`navbar navbar-expand-lg extended navbar-light navbar-bg-light ${scrolledPast ? 'fixed banner--clone banner--stick' : ''}`}>
            <div className="container flex-lg-column">
                <div className="topbar d-flex flex-row w-100 justify-content-between align-items-center">
                    <div className="navbar-brand">
                        <a href="./">
                            <img src="./assets/img/logo-aswov.png"
                                srcSet="./assets/img/logo-aswov@2x.png 2x" alt="" />
                        </a>
                    </div>
                    <div className="navbar-other ms-auto">
                        <ul className="navbar-nav flex-row align-items-center" data-sm-skip="true">
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="offcanvas-info">
                                    <i className="uil uil-info-circle"></i>
                                </a>
                            </li>
                            <li className="nav-item d-lg-none">
                                <div className="navbar-hamburger">
                                    <button className="hamburger animate plain" data-toggle="offcanvas-nav">
                                        <span></span>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-collapse-wrapper bg-white d-flex flex-row align-items-center">
                    <div className="navbar-collapse offcanvas-nav">
                        <div className="offcanvas-header d-lg-none d-xl-none">
                            <a href="./">
                                <img src="./assets/img/logo-aswov-white.png"
                                    srcSet="./assets/img/logo-aswov-white@2x.png 2x" alt="" />
                            </a>
                            <button type="button" className="btn-close btn-close-white offcanvas-close offcanvas-nav-close"
                                aria-label="Close"></button>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="./">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./our-story">Our Story</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#">Special Wishes</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a className="dropdown-item" href="./wish-types">Wish Types</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="dropdown-item" href="./wishes-in-the-works">Wishes in the Works</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="dropdown-item" href="./sparkles-of-joy">Sparkles of Joy</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="dropdown-item" href="./past-wishes">Past Wishes</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="get-involved">Get Involved</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="events">Events</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#">Heroes</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a className="dropdown-item" href="./sponsors">Sponsors</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="dropdown-item" href="./volunteers">Volunteers</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item d-lg-none d-xl-none mt-5">
                                <a className="nav-link btn btn-sm btn-white text-red"
                                    href="https://www.powr.io/checkout_screen?unique_label=9310c943_1495758782"
                                    target="_blank">
                                    &nbsp;&nbsp;<i className="fas fa-heart"></i> Donate to Our Cause&nbsp;&nbsp;
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <div className="offcanvas-info text-navy">
            <button type="button" className="btn-close btn-close-white offcanvas-close offcanvas-info-close"
                aria-label="Close"></button>
            <a href="./">
                <img className="img-fluid" src="./assets/img/logos/aswov-logo.jpg"
                    srcSet="./assets/img/logos/aswov-logo@2x.png 2x" alt="" />
            </a>
            <div className="mt-4 widget">
                <p>We are a non-profit charity dedicated to granting the wishes of children under the age of 21 who have been
                    diagnosed with a life-threatening disorder.</p>
            </div>
            <div className="widget">
                <h4 className="widget-title text-navy mb-3">Contact Info</h4>
                <address> Post Office Box 674 <br /> St. Clairsville, OH 43950 </address>
                <a href="mailto:aogrady@spwishov.com" className="text-hot-red">aogrady@spwishov.com</a><br /> <a
                    href="tel:7404492063">(740) 449-2063</a>
            </div>
            <div className="widget">
                <h4 className="widget-title text-navy mb-3">Learn More</h4>
                <ul className="list-unstyled">
                    <li><a href="./our-story">Our Story</a></li>
                    <li><a href="./get-involved">Get Involved</a></li>
                    <li><a href="./sponsors">Heroes</a></li>
                    <li><a href="./contact">Contact Us</a></li>
                </ul>
            </div>
            <div className="widget">
                <h4 className="widget-title text-navy mb-3">Follow Us</h4>
                <nav className="nav social social-sky">
                    <a href="https://www.facebook.com/aspecialwishohiovalley"><i className="uil uil-facebook-f"></i></a>
                    <a href="#"><i className="uil uil-twitter"></i></a>
                    <a href="#"><i className="uil uil-instagram"></i></a>
                </nav>
            </div>
        </div>
    </header>;
};

Header.propTypes = {
    useScroll: PropTypes.bool,
};

Header.defaultProps = {
    useScroll: true,
};

export default Header;
