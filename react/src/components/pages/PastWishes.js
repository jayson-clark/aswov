import React, { useState } from 'react';

import Header from '../root/Header';
import Footer from '../root/Footer';

const MainSection = () => <section className="wrapper bg-pale-red">
    <div className="container pt-10 pb-0 pt-md-14 text-center">
        <div className="row gx-md-8 gx-lg-12 gy-3 gy-lg-0 mb-5">
            <div className="col-12">
                <h1 className="display-1 fs-66 lh-xxs mb-0" align="center">Past <strong>wishes</strong>.</h1>
            </div>
        </div>
    </div>
    <figure className="position-absoute" style={{ bottom: 0, left: 0, zIndex: 2 }} data-cues="slideInDown" data-group="page-title" data-delay="600">
        <img src="./assets/img/wishes/wishes-in-the-works.jpg" srcSet="./assets/img/wishes/wishes-in-the-works@2x.jpg 2x" alt="" />
    </figure>
</section>;

const DividerSection = () => <>
    <figure className="position-absoute" style={{ bottom: 0, left: 0, zIndex: 2 }} data-cues="slideInDown" data-group="page-title" data-delay="600"><img src="./assets/img/donate/balloon_main.jpg" srcset="./assets/img/donate/balloon_main@2x.jpg 2x" alt="" /></figure>
    <section className="wrapper bg-light">
        <div className="overflow-hidden">
            <div className="divider text-navy mx-n2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                    <path fill="currentColor" d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z" />
                </svg>
            </div>
        </div>
    </section>
</>;

const PastWishes = () => {
    const sources = [
        '/assets/img/wishes-past/jaymison_collage1.jpg',
        '/assets/img/wishes-past/jaymison_collage2.jpg',
    ];

    const [srcIndex, setSrcIndex] = useState(0);

    const incSrc = (n) => {
        const newIndex = (srcIndex + n + sources.length) % sources.length;
        setSrcIndex(newIndex);
    };

    const VolunteerSection = () => <section className="wrapper">
        <div className="container pt-10 pb-0 pt-md-14">
            <div className="row">
                <div className="col-md-12 col-lg-3" style={{ margin: 'auto' }}>
                    <h3 className="display-6"><font face="Praline-Regular">Ceci Rotillio</font></h3>
                    <p className="mb-5">
                        Ceci had a blast on her wish trip recently! She and her family got to go to Busch Gardens and Adventure Island in Tampa, FL!
                        Ceci got to handfeed giraffes, ride all of the rollercoasters she wanted, enjoy the water rides, and even spend a day at Clearwater Beach!
                        Thank you so much to Christopher Dutton and the Dutton family for sponsoring Ceci's wish! It was a week she will never forget!
                    </p>
                </div>
                <div className="col-md-12 col-lg-9">
                    <img src="/assets/img/wishes-past/ceci_collage.jpg" style={{ width: '100%' }} alt="" />
                </div>
            </div>
            <div className="row" style={{ height: '30px' }}></div>
            <div className="row">
                <figure className="col-md-12 col-lg-9 d-lg-block text-center" style={{ display: 'none' }}>
                    <img src={sources[srcIndex]} style={{ width: '100%', opacity: 1 }} id="jaymison_image1" alt="" />
                    <button className="btn btn-soft-grape" style={{ padding: '5px', bottom: 0 }} onClick={() => incSrc(-1)}>&lt;</button>
                    <button className="btn btn-soft-grape" style={{ padding: '5px', bottom: 0 }} onClick={() => incSrc(1)}>&gt;</button>
                </figure>
                <div className="col-md-12 col-lg-3" style={{ margin: 'auto' }}>
                    <h3 className="display-6"><font face="Praline-Regular">Jaymison Redman</font></h3>
                    <p className="mb-5">
                        This spring our wish kiddo, Jaymison, had the best week ever when his wish was granted to go to Disney World and Universal Studios!
                        Thank you to Fitzsimmons Law Firm PLLC for sponsoring Jaymison's wish and putting that beautiful smile on his face!
                    </p>
                </div>
                <figure className="col-md-12 col-lg-9 d-lg-none text-center">
                    <img src={sources[srcIndex]} style={{ width: '100%', opacity: 1 }} id="jaymison_image2" alt="" />
                    <button className="btn btn-soft-grape" style={{ padding: '5px', left: '3px' }} onClick={() => incSrc(-1)}>&lt;</button>
                    <button className="btn btn-soft-grape" style={{ padding: '5px', right: '3px' }} onClick={() => incSrc(1)}>&gt;</button>
                </figure>
            </div>
        </div>
    </section>;

    return <div className="content-wrapper">
        <div className='bg-pale-red'><Header /></div>
        <MainSection />
        <VolunteerSection />
        <DividerSection />
        <Footer />
    </div>;
};

export default PastWishes;
