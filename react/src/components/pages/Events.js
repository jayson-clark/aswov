import React, { useState } from 'react';

import Header from '../root/Header';
import Footer from '../root/Footer';

import '../../css/events.css'

const MainSection = () => <section className="wrapper bg-soft-blue">
    <div className="container pt-17 pb-10 pt-md-18 pb-md-10 text-center">
        <div className="row gx-md-5 gy-5 mt-n19 pb-0">
            <div className="col-12">
                <img className="img-fluid" src="./assets/img/main/sky.png" srcSet="./assets/img/main/sky@2x.png 2x" alt="" />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-8 col-xl-7 col-xxl-6 mb-0 mx-auto" data-cues="slideInDown" data-group="page-title">
                <h2 className="fs-16 text-uppercase ls-xl text-navy mb-4"><i className="fas fa-heart text-yellow"></i> Join Us</h2>
                <h1 className="display-1 text-navy fs-60 mb-4 px-md-15 px-lg-0">
                    <strong>
                        <span className="underline-3 style-2 yellow">Events</span>
                    </strong>
                </h1>
                <p className="lead fs-24 text-navy lh-sm mb-0">
                    Join us in making an impact in the lives of local children with life-threatening disorders.
                </p>
            </div>
        </div>
    </div>
    <div className="overflow-hidden bg-soft-blue">
        <div className="divider text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
                <path fill="currentColor" d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z" />
            </svg>
        </div>
    </div>
</section>;

const UpcomingEvents = () => {
    const [golfFlyer, setGolfFlyer] = useState({
        src: './assets/img/events/golf_registration.png',
        label: 'View Sponsorship Form',
        link: './assets/img/events/golf_registration.png'
    });

    const switchGolfFlyer = () => {
        if (golfFlyer.label === 'View Sponsorship Form') {
            setGolfFlyer({
                src: './assets/img/events/golf_sponsors.png',
                label: 'View Registration Form',
                link: './assets/img/events/golf_sponsors.png'
            });
        } else {
            setGolfFlyer({
                src: './assets/img/events/golf_registration.png',
                label: 'View Sponsorship Form',
                link: './assets/img/events/golf_registration.png'
            });
        }
    };

    return <section className="wrapper">
        <div className="px-5 pt-10 pb-10 pb-md-10 text-center">
            <div className="row">
                <h1 className="display-2 text-navy mb-4 px-md-15 px-lg-0">
                    <strong>Upcoming Events</strong>
                </h1>
            </div>
            <div className="row">
                <div className="col-12 col-lg-4">
                    <figure className="rounded shadow-lg">
                        <img src="./assets/img/events/2024_events.png" alt="" style={{ width: '100%' }} />
                    </figure>
                </div>
                <div className="col-12 col-lg-4">
                    <figure className="rounded shadow-lg">
                        <img src={golfFlyer.src} id="golf-flyer-img" alt="" style={{ width: '100%' }} />
                    </figure>
                    <span>
                        <a onClick={switchGolfFlyer} id="golf-flyer-label" style={{ cursor: 'pointer', color: 'blue' }}>
                            {golfFlyer.label}
                        </a> |
                        <a href={golfFlyer.link} id="golf-flyer-link" style={{ color: 'blue' }} target="_blank">Print</a>
                    </span>
                </div>
                <div className="col-12 col-lg-4">
                    <figure className="rounded shadow-lg">
                        <img src="./assets/img/events/lip_sync.png" alt="" style={{ width: '100%' }} />
                    </figure>
                </div>
            </div>
        </div>
    </section>;
};

const LipSyncSection = () => <section className="wrapper">
    <div className="px-5 pt-10 pb-10 pb-md-10 text-center">
        <div className="row">
            <h1 className="display-2 text-navy mb-4 px-md-15 px-lg-0"><strong>Lip Sync Challenge</strong></h1>
        </div>
        <br />
        <div className="row">
            <div className="col-12 col-lg-3 col-xl-2">
                <div className="video-selector">
                    <p>2022</p>
                    <a href="#_2022-highlights">Highlights</a><br />
                    <a href="#nick-nash">Nick Nash</a><br />
                    <a href="#claudia-raymer">Claudia Raymer</a><br />
                    <a href="#jermaine-lucious">Jermaine Lucious</a><br />
                    <a href="#rich-lucas">Rich Lucas</a><br />
                    <a href="#jayla-robinson">Jayla Robinson</a><br />
                    <a href="#adam-myser">Adam Myser</a><br />
                    <p>2023</p>
                    <a href="#taylor-rys">Taylor Rys</a><br />
                    <a href="#josh-sanders">Josh Sanders</a><br />
                    <a href="#john-rataiczak">John Rataiczak</a><br />
                    <a href="#lea-ridenhour">Lea Ridenhour</a><br />
                    <a href="#emily-shorthall">Emily Shorthall</a><br />
                    <br />
                </div>
            </div>
            <div className="col-12 col-lg-9 col-xl-10" id="videos">
                <div id="_2022-highlights" className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                        <figure>
                            <video style={{ width: '100%' }} controls>
                                <source src="./assets/video/2022-lipsync.mp4" type="video/mp4" />
                            </video>
                        </figure>
                    </div>
                </div>
                <div id="nick-nash" className="row">
                    <div className="col-lg-6 col-12">
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe src="https://player.vimeo.com/video/763987499?h=7c2032882e&badge=0&autopause=0&player_id=0&app_id=58479"
                                frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                title="Nick Nash 'Dentist!' | 2022 A Special Wish Lip Sync Challenge"></iframe>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe src="https://player.vimeo.com/video/764793888?h=2d1dfde73c&badge=0&autopause=0&player_id=0&app_id=58479"
                                frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                title="Nick Nash 'The Groove Line' | 2022 A Special Wish Lip Sync Challenge"></iframe>
                        </div>
                    </div>
                </div>
                <div id="claudia-raymer" className="row">
                    <div className="col-lg-6 col-12">
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe src="https://player.vimeo.com/video/764009221?h=5a6728f469&badge=0&autopause=0&player_id=0&app_id=58479"
                                frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                title="Claudia Raymer 'On the Floor' | 2022 A Special Wish Lip Sync Challenge"></iframe>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe src="https://player.vimeo.com/video/764806451?h=daefd58c6f&badge=0&autopause=0&player_id=0&app_id=58479"
                                frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                title="Claudia Raymer 'Brittany MashUp' | 2022 A Special Wish Lip Sync Challenge"></iframe>
                        </div>
                    </div>
                </div>
                <div id="rich-lucas" className="row">
                    <div className="col-lg-6 col-12">
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe src="https://player.vimeo.com/video/765036199?h=7077abe996&badge=0&autopause=0&player_id=0&app_id=58479"
                                frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                title="Rich Lucas 'Danger Zone' | 2022 A Special Wish Lip Sync Challenge"></iframe>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe src="https://player.vimeo.com/video/765035388?h=b8a1061f2d&badge=0&autopause=0&player_id=0&app_id=58479"
                                frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                title="Rich Lucas 'Jessie's Girl' | 2022 A Special Wish Lip Sync Challenge"></iframe>
                        </div>
                    </div>
                </div>
                <div id="jermaine-lucious" className="row">
                    <div className="col-lg-6 col-12">
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe src="https://player.vimeo.com/video/764818625?h=8fb4b1cbbd&badge=0&autopause=0&player_id=0&app_id=58479"
                                frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                title="Jermaine Lucious 'I Would Do Anything for Love' | 2022 A Special Wish Lip Sync Challenge"></iframe>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe src="https://player.vimeo.com/video/765053013?h=50e76a56be&badge=0&autopause=0&player_id=0&app_id=58479"
                                frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                title="Jermaine Lucious 'Bust A Move' | 2022 A Special Wish Lip Sync Challenge"></iframe>
                        </div>
                    </div>
                </div>
                <div id="jayla-robinson" className="row">
                    <div className="col-lg-6 col-12">
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe src="h1ttps://player.vimeo.com/video/764856309?h=1402867071&badge=0&autopause=0&player_id=0&app_id=58479"
                                frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                title="Jayla Robinson 'Elton MashUp' | 2022 A Special Wish Lip Sync Challenge"></iframe>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe src="https://player.vimeo.com/video/764856231?h=1a6f58c318&badge=0&autopause=0&player_id=0&app_id=58479"
                                frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                title="Jayla Robinson 'Beyonce MashUp' | 2022 A Special Wish Lip Sync Challenge"></iframe>
                        </div>
                    </div>
                </div>
                <div id="adam-myser" className="row">
                    <div className="col-lg-6 col-12">
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe src="https://player.vimeo.com/video/764856138?h=8a365464c3&badge=0&autopause=0&player_id=0&app_id=58479"
                                frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                title="Adam Myser 'Footloose' | 2022 A Special Wish Lip Sync Challenge"></iframe>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe src="https://player.vimeo.com/video/764841933?h=6ce7f82745&badge=0&autopause=0&player_id=0&app_id=58479"
                                frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                title="Adam Myser 'Everybody Needs Somebody to Love' | 2022 A Special Wish Lip Sync Challenge"></iframe>
                        </div>
                    </div>
                </div>
                <div id="taylor-rys" className="row">
                    <div className="col-12 col-lg-6">
                        <iframe style={{ width: '100%', height: '400px' }} src="https://www.youtube.com/embed/ZJQ-yL9mngI?si=qxxJIeMWru0CXBmL"
                            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </div>
                    <div className="col-12 col-lg-6">
                        <iframe style={{ width: '100%', height: '400px' }} src="https://www.youtube.com/embed/mcwhb5kXrZs?si=ZCd1KTU0YkpHQcNH"
                            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </div>
                </div>
                <div id="josh-sanders" className="row">
                    <div className="col-12 col-lg-6">
                        <iframe style={{ width: '100%', height: '400px' }} src="https://www.youtube.com/embed/eABfneee1Yk?si=40cPLag9dT__94By"
                            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </div>
                    <div className="col-12 col-lg-6">
                        <iframe style={{ width: '100%', height: '400px' }} src="https://www.youtube.com/embed/0UcCvyq2Yhc?si=zXDg_WhR0pauHtHQ"
                            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </div>
                </div>
                <div id="john-rataiczak" className="row">
                    <div className="col-12 col-lg-6">
                        <iframe style={{ width: '100%', height: '400px' }} src="https://www.youtube.com/embed/jOdQmUV-Q5k?si=iI7DqZO7CXF0ZiWY"
                            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </div>
                    <div className="col-12 col-lg-6">
                        <iframe style={{ width: '100%', height: '400px' }} src="https://www.youtube.com/embed/S4Bhy4YcN6c?si=xhhf_HfSuJOnM_-9"
                            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </div>
                </div>
                <div id="lea-ridenhour" className="row">
                    <div className="col-12 col-lg-6">
                        <iframe style={{ width: '100%', height: '400px' }} src="https://www.youtube.com/embed/wuFISCSIaWg?si=7RL0bAp3a0cZp8f1"
                            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </div>
                    <div className="col-12 col-lg-6">
                        <iframe style={{ width: '100%', height: '400px' }} src="https://www.youtube.com/embed/k48e4DWGI7Y?si=4K17FPOdBJkiMPY_"
                            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </div>
                </div>
                <div id="emily-shorthall" className="row">
                    <div className="col-12 col-lg-6">
                        <iframe style={{ width: '100%', height: '400px' }} src="https://www.youtube.com/embed/KAtk7Z_-o9Q?si=SWEpPaFyNO9wfICn&start=3"
                            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </div>
                    <div className="col-12 col-lg-6">
                        <iframe style={{ width: '100%', height: '400px' }} src="https://www.youtube.com/embed/pqn4tY6LMHo?si=Bve6h6-AifFzWg7b"
                            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>;

const DividerSection = () => <section className="wrapper">
    <div className="overflow-hidden">
        <div className="divider text-navy mx-n2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                <path fill="currentColor" d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z" />
            </svg>
        </div>
    </div>
</section>;

const Events = () => <div className="content-wrapper">
    <div className='bg-soft-blue'><Header /></div>
    <MainSection />
    <UpcomingEvents />
    <LipSyncSection />
    <DividerSection />
    <Footer />
</div>;

export default Events;
