import React from 'react';

import Header from '../root/Header';
import Footer from '../root/Footer';

const MainSection = () => <section className="wrapper bg-soft-blue">
    <div className="container py-8 pt-md-8 pb-0">
        <div className="row text-center">
            <div className="col-lg-9 col-xxl-7 mx-auto" data-cues="zoomIn" data-group="welcome" data-interval="-200">
                <h2 className="fs-16 text-uppercase ls-xl text-dark mb-3">Hello! We are the</h2>
                <h4 className="display-3 mb-1">
                    <font face="Praline-Regular">Ohio Valley Chapter of</font>
                </h4>
            </div>
        </div>
        <div className="row mb-0" data-cue="fadeIn" data-delay="1600">
            <div className="col-lg-8 mx-auto">
                <center>
                    <img className="img-fluid" src="./assets/img/logos/aswov-logo-full-color.png"
                        srcSet="./assets/img/logos/aswov-logo-full-color@2x.png 2x" alt="" />
                </center>
            </div>
        </div>
    </div>
    <figure className="position-absoute" style={{ bottom: 0, left: 0, zIndex: 2 }} data-cues="slideInDown"
        data-group="page-title" data-delay="400">
        <img src="./assets/img/main/zach_main.png" srcSet="./assets/img/main/zach_main@2x.png 2x" alt="" />
    </figure>
    <div data-cue="slideInRight" data-delay="300">
        <div className="card shadow-lg position-absolute" style={{ bottom: 75, right: '20%' }}>
            <div className="card-body py-1 px-5">
                <div className="d-flex flex-row align-items-center">
                    <div>
                        <div className="icon btn btn-circle btn-md btn-soft-primary disabled mx-auto me-3">
                            <i className="fa-solid fa-child"></i>
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-0 text-nowrap">Zach</h3>
                        <p className="fs-14 lh-sm mb-0 text-nowrap">2018 Wish Recipient</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>;


const WhoWeAreSection = () => <section className="wrapper bg-gradient-soft-blue">
    <div className="container">
        <div className="card shadow-lg">
            <div className="card-body">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h4 className="text-uppercase text-sky mb-3">
                            <i className="fas fa-heart text-hot-red"></i>
                            <strong>Who we are</strong>
                        </h4>
                        <h3 className="display-1 text-navy mb-5">
                            <font face="Praline-Regular">We are local to <br />your community</font>
                        </h3>
                        <p>We are locally operated by dedicated residents right here in the Ohio Valley and all donations to our chapter go directly to granting the wishes of our local children battling life-threatening disorders.</p>
                        <a href="aswov-our-story.html" className="btn btn-outline-hot-red rounded-pill mb-10">More about Us</a>
                    </div>
                    <div className="col-md-8 col-lg-6">
                        <figure className="rounded">
                            <img src="./assets/img/40yrsgraphic.png" srcSet="./assets/img/main/30th-anniversary-main@2x.jpg 2x" alt="" />
                        </figure>
                        <h4 className="display-4 text-sky mt-5 mb-0" align="center">
                            <strong>Over <span className="underline-3 style-2 red text-red">150 wishes</span> granted to the children of <span className="text-red">our communities</span></strong>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>;

const DividerSection1 = () => <section className="wrapper bg-light pt-10">
    <div className="overflow-hidden">
        <div className="divider text-pale-sky mx-n2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                <path fill="currentColor"
                    d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z" />
            </svg>
        </div>
    </div>
</section>;

const AboutSection = () => <section className="wrapper bg-gradient-pale-sky">
    <div className="container pt-12 pt-lg-10">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-7">
                <div className="row gx-md-5 gy-5">
                    <div className="col-md-6">
                        <figure className="rounded shadow-lg">
                            <img src="./assets/img/logos/aswov-logo.jpg" srcSet="./assets/img/logos/aswov-logo@2x.jpg 2x" alt="A Special Wish Ohio Valley Logo" />
                        </figure>
                    </div>
                    <div className="col-md-6 align-self-end">
                        <figure className="rounded">
                            <img src="./assets/img/40yrsgraphic.png" srcSet="./assets/img/main/30th-anniversary-logo2x.jpg 2x" alt="" />
                        </figure>
                    </div>
                    <div className="col-12">
                        <figure className="rounded mx-md-5">
                            <img src="./assets/img/wishes-past/aibe-shreve.jpg" srcSet="./assets/img/wishes-past/aibe-shreve@2x.jpg 2x" alt="" />
                        </figure>
                    </div>
                </div>
            </div>
            <div className="col-lg-5">
                <h2 className="fs-24 text-sky mb-3">About <span className="underline-3 style-2 red">A Special Wish</span></h2>
                <h2 className="display-2 mb-7">
                    <strong>The only major wish granting organization in the US that grants wishes to qualifying infants, children, and adolescents from birth up to the age of 21.</strong>
                </h2>
                <h2 className="mb-5">
                    <strong>Our Chapter,</strong> the<br /> <strong>Ohio Valley Chapter</strong> <span className="underline-3 style-1 red"> &nbsp;ASWOV </span>
                </h2>
                <p>We proudly opened our doors in 1992. In the last <strong>30 years</strong> we have had the opportunity to grant over <strong>150 wishes to local children</strong> right here in the Ohio Valley. We are your neighors, friends, and family and we are dedicated to serving the children of our communities. We are so grateful and thankful to all of our supporters who have helped us grant these special wishes!</p>
            </div>
        </div>
        <div className="row">
            <figure className="position-absoute" style={{ bottom: 0, left: 0, zIndex: 2 }} data-cues="slideInDown" data-group="page-title" data-delay="400">
                <img src="./assets/img/main/book-quote.png" srcSet="./assets/img/main/book-quote@2x.png 2x" alt="" />
            </figure>
        </div>
    </div>
</section>;

const ReferralSection = () => <section className="wrapper mb-10 bg-light">
    <div className="container">
        <div className="card bg-aqua shadow-none">
            <div className="card-body py-8 py-lg-10 px-lg-12 py-xl-12 px-xl-12">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h1 className="display-1 text-soft-aqua mb-5">
                            <strong>Do you know a child with a life-threatening disorder in need of a life changing wish?</strong>
                        </h1>
                        <p className="text-white mb-4">All "Special" Wishes begin with a referral. Anyone can refer a child for consideration to A Special Wish and we will contact the family. Brothers, sisters, neighbors, nurses, doctors, coaches, family and friends can help be part of something special!</p>
                        <a href="./aswov-get-involved.html" className="btn btn-outline-white rounded-pill">Help a wish come true</a>
                    </div>
                    <div className="col-md-8 col-lg-6">
                        <br />
                        <figure className="rounded">
                            <img src="./assets/img/monstersinc.jpg" alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>;

const SocializeSection = () => <section className="wrapper bg-light pt-0">
    <div className="overflow-hidden">
        <div className="divider text-soft-primary mx-n2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                <path fill="currentColor"
                    d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z" />
            </svg>
        </div>
    </div>
</section>;

const OurHeroesSection = () => <section className="wrapper bg-soft-primary overflow-hidden">
    <div className="container pt-0 pb-10">
        <div className="row">
            <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center">
                <h2 className="fs-16 text-uppercase text-primary mb-3">You and <strong>ASW</strong></h2>
                <h2 className="display-2 mb-10">
                    <strong>Support</strong> those that <strong>support Us</strong>
                </h2>
            </div>
        </div>
        <div className="row gx-md-8 gx-xl-10">
            <div className="col-lg-6">
                <div className="card bg-white mb-5">
                    <div className="card-body">
                        <div className="post-category mb-1 text-aqua" align="center">
                            <i className="fas fa-heart text-yellow"></i> Special Thanks to <i className="fas fa-heart text-yellow"></i>
                        </div>
                        <h3 className="display-3 mb-3" align="center">
                            <strong>Our 2024 Brilliant Partners</strong>
                        </h3>
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="item" style={{ padding: 12 }}>
                                    <figure className="rounded">
                                        <a href="https://www.newmantractor.com/" target="_blank" rel="noopener noreferrer">
                                            <img src="./assets/img/partners/newmantractor.png" alt="" />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="item" style={{ padding: 12 }}>
                                    <figure className="rounded">
                                        <a href="https://hoagysheroes.org/" target="_blank" rel="noopener noreferrer">
                                            <img src="./assets/img/partners/SWNENERGY.jpg" alt="" />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-white mb-5">
                    <div className="card-body">
                        <div className="post-category mb-1 text-aqua" align="center">
                            <i className="fas fa-heart text-yellow"></i> Special Thanks to <i className="fas fa-heart text-yellow"></i>
                        </div>
                        <h3 className="display-3 mb-3" align="center">
                            <strong>Our 2024 Shine Partner</strong>
                        </h3>
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-6">
                                <div className="item">
                                    <figure className="rounded">
                                        <a href="https://hoagysheroes.org/" target="_blank" rel="noopener noreferrer">
                                            <img src="./assets/img/partners/hoagys-heros-logo.png" srcSet="./assets/img/partners/hoagys-heros-logo.png" alt="" />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card bg-white mb-5">
                    <div className="card-body">
                        <div className="post-category mb-1 text-aqua" align="center">
                            <i className="fas fa-heart text-yellow"></i> Special Thanks to <i className="fas fa-heart text-yellow"></i>
                        </div>
                        <h3 className="display-3 mb-3" align="center">
                            <strong>Our 2024 Luminary Partners</strong>
                        </h3>
                        <div className="row">
                            <div className="col-6">
                                <div className="item center-vert">
                                    <figure className="rounded">
                                        <a href="https://www.clickharvey.com/" target="_blank" rel="noopener noreferrer">
                                            <img src="./assets/img/partners/goodman-realtor.png" alt="" />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="item">
                                    <figure className="rounded">
                                        <a href="https://www.mymainstreetbank.bank/" target="_blank" rel="noopener noreferrer">
                                            <img src="./assets/img/partners/main-street-bank-logo.png" srcSet="./assets/img/partners/main-street-bank-logo@2x.png 2x" alt="" />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-facebook">
                    <div className="card-body p-8 pb-0">
                        <h3 className="display-3 post-title text-white mb-3">
                            Let's <strong>Socialize.</strong><br /> <strong>Follow Us</strong> on <strong>Facebook.</strong>
                        </h3>
                        <p className="text-white">Stay up to date with all that is happening with Our Chapter on social media. Find out about wishes in the works, fundraising events, and special wish news.</p>
                        <a href="https://www.facebook.com/aspecialwishohiovalley/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white rounded-pill mb-1">
                            <i className="fa-solid fa-thumbs-up"></i> Like Us
                        </a>
                    </div>
                    <img className="card-img-bottom pt-2" src="./assets/img/main/facebook.jpg" srcSet="./assets/img/main/facebook@2x.jpg 2x" alt="" />
                </div>
            </div>
        </div>
    </div>
</section>;

const DividerSection2 = () => <section className="wrapper bg-soft-primary">
    <div className="overflow-hidden">
        <div className="divider text-navy mx-n2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                <path fill="currentColor"
                    d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z" />
            </svg>
        </div>
    </div>
</section>;


const Home = () => <div className="content-wrapper">
    <div className='bg-soft-blue'><Header useScroll={true} /></div>
    <MainSection />
    <WhoWeAreSection />
    <DividerSection1 />
    <AboutSection />
    <ReferralSection />
    <SocializeSection />
    <OurHeroesSection />
    <DividerSection2 />
    <Footer />
</div>;

export default Home;
