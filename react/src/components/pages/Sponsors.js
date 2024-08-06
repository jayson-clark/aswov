import React from 'react';

import Header from '../root/Header';
import Footer from '../root/Footer';

const MainSection = () => <section className="wrapper bg-soft-blue">
    <div className="container pt-10 pb-10 text-center">
        <div className="row">
            <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto" data-cues="slideInDown" data-group="page-title">
                <h2 className="fs-16 text-uppercase ls-xl text-navy mb-4"><i className="fas fa-heart text-yellow"></i> You & ASW</h2>
                <h1 className="display-1 text-navy fs-60 mb-4 px-md-15 px-lg-0">
                    <strong>Support</strong> those that <strong><span className="underline-3 style-2 yellow">support Us</span></strong>
                </h1>
            </div>
        </div>
    </div>
</section>;

const SponsorsSection = () => <section className="wrapper bg-gradient-soft-blue">
    <div className="container pb-5">
        <div className="row">
            <div className="col-lg-4">
                <figure className="rounded mb-5">
                    <img src="./assets/img/sponsors/hoagy.jpg" alt="" />
                </figure>
            </div>
            <div className="col-lg-4">
                <figure className="rounded mb-5">
                    <img src="./assets/img/sponsors/goodmans.jpg" alt="" />
                </figure>
            </div>
            <div className="col-lg-4">
                <div className="card bg-white mb-5" style={{ height: 'calc(100% - 25px)' }}>
                    <div className="card-body">
                        <h3 className="display-3 mb-3" align="center"><strong>Our 2024 Brilliant Partners</strong></h3>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="item" style={{ padding: '15px' }}>
                                    <figure className="rounded">
                                        <img src="./assets/img/sponsors/newman.png" srcSet="./assets/img/sponsors/newman.png" alt="" />
                                    </figure>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="item" style={{ padding: '15px' }}>
                                    <figure className="rounded">
                                        <img src="./assets/img/partners/SWNENERGY.jpg" alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-7">
                <div className="card bg-white mb-5">
                    <div className="card-body">
                        <h3 className="display-3 mb-3" align="center"><strong>Our 2024 Luminary Partners</strong></h3>
                        <div className="row">
                            <div className="col-lg-6" style={{ paddingTop: '20px' }}>
                                <div className="item">
                                    <figure className="rounded">
                                        <a href="https://www.clickharvey.com/" target="_blank" rel="noopener noreferrer">
                                            <img src="./assets/img/partners/goodman-realtor.png" srcSet="./assets/img/partners/goodman-realtor.png 2x" alt="" />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-lg-6">
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
            </div>
            <div className="col-lg-5">
                <div className="card bg-white mb-5" style={{ height: 'calc(100% - 25px)' }}>
                    <div className="card-body">
                        <h3 className="display-3 mb-3" align="center"><strong>Our 2024 Shine Partner</strong></h3>
                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8">
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
        </div>

    </div>
</section>;

const DividerSection = () => <section className="wrapper bg-light">
    <div className="overflow-hidden">
        <div className="divider text-navy mx-n2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                <path fill="currentColor" d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z" />
            </svg>
        </div>
    </div>
</section>;

const Sponsors = () => <div className="content-wrapper">
    <div className='bg-soft-blue'><Header /></div>
    <MainSection />
    <SponsorsSection />
    <DividerSection />
    <Footer />
</div>;

export default Sponsors;
