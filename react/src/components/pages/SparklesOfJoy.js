import React from 'react';

import Header from '../root/Header';
import Footer from '../root/Footer';

const MainSection = () => <section className="wrapper bg-pale-red">
    <div className="container pt-10 pb-0 pt-md-14 text-center">
        <div className="row gx-md-8 gx-lg-12 gy-3 gy-lg-0 mb-5">
            <div className="col-12">
                <h1 className="display-1 fs-66 lh-xxs mb-0" align="center">
                    <strong>Sparkles</strong> of <strong>Joy.</strong>
                </h1>
            </div>
        </div>
    </div>
    <figure className="position-absoute" style={{ bottom: 0, left: 0, zIndex: 2 }} data-cues="slideInDown" data-group="page-title" data-delay="600">
        <img src="./assets/img/wishes/wishes-in-the-works.jpg" srcSet="./assets/img/wishes/wishes-in-the-works@2x.jpg 2x" alt="" />
    </figure>
</section>;

const VolunteerSection = () => <section className="wrapper">
    <div className="container pt-10 pb-0 pt-md-14">
        <div className="row isotope">
            <div className="col-md-12 col-lg-3" style={{ margin: 'auto' }}>
                <h3 className="display-6"><font face="Praline-Regular">Jaymison Redman</font></h3>
                <p align="justify" className="mb-5">
                    It was a beautiful day to do a Sparkle of Joy for Jaymison! Jaymison is really fascinated with Teslas, especially their computer.
                    He wants to have a Tesla when he grows up, even though he had never been in one. We were so excited to be able to change that today!
                    With the help of our friend, Pam Phelleps Shields, Jaymison and his mom, got to go for a ride in Pam’s Tesla!
                </p>
            </div>
            <div className="col-md-12 col-lg-9">
                <img src="/assets/img/sparkles-of-joy/jaymison_collage.jpg" style={{ width: '100%' }} alt="" />
            </div>
        </div>
    </div>
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

const SparklesOfJoy = () => <div className="content-wrapper">
    <div className='bg-pale-red'><Header /></div>
    <MainSection />
    <VolunteerSection />
    <DividerSection />
    <Footer />
</div>;

export default SparklesOfJoy;
