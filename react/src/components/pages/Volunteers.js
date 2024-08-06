import React from 'react';

import Header from '../root/Header';
import Footer from '../root/Footer';

const VolunteerSection = () => <section className="wrapper bg-gradient-pale-pink">
    <div className="container pt-10 pb-12 pt-md-14 pb-md-15">
        <div className="row">
            <div className="col-md-8 col-lg-7 col-xl-6 col-xxl-6 mx-auto mb-11 mx-auto text-center">
                <h2 className="text-red mb-3" style={{ fontSize: '35pt' }}>SOME <strong>WISHES</strong> CAN'T <strong>WAIT</strong></h2>
                <h3 className="display-1 mb-10 px-xl-10 px-xxl-15"><strong>Remember, time is especially precious to the children and families we serve.</strong></h3>
            </div>
        </div>
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6">
                <h1 className="display-3 text-gradient gradient-1 lh-xxs mb-4" align="left"><strong>Volunteers are the backbone of our organization and we rely heavily on the generosity of community volunteers to achieve our mission.</strong></h1>
                <p>A little time goes a long way in making "special" wishes come true. Please consider donating your time and talents to enhance the quality of life of our wish children and their families. There are many opportunities at A Special Wish, and ALL of them are vital to supporting our program and helping us grant wishes.</p>
                <h1 className="display-4 text-navy lh-xxs mb-4" align="left">Ready to <strong className="text-fuchsia">volunteer?</strong></h1>
                <a href="mailto:aogrady@spwishov.com" className="btn btn-outline-gradient gradient-1 rounded-pill"><span className="text-gradient gradient-1">Learn More</span></a>
            </div>
            <div className="col-lg-6">
                <figure className="rounded shadow-lg mb-3">
                    <img src="./assets/img/chapter/our-chapter-volunteer.jpg" srcSet="./assets/img/chapter/our-chapter-volunteer@2x.jpg 2x" alt="" />
                </figure>
            </div>
        </div>
        <div className="row">
            <figure className="col-lg-3 rounded mb-3" style={{ marginTop: 'auto' }}>
                <img src="./assets/img/volunteers/image002.png" alt="" />
            </figure>
            <figure className="col-lg-3 rounded mb-3" style={{ marginTop: 'auto' }}>
                <img src="./assets/img/volunteers/image004.png" alt="" />
            </figure>
            <figure className="col-lg-3 rounded mb-3" style={{ marginTop: 'auto' }}>
                <img src="./assets/img/volunteers/image005.png" alt="" />
            </figure>
            <figure className="col-lg-3 rounded mb-3" style={{ marginTop: 'auto' }}>
                <img src="./assets/img/volunteers/image003.png" alt="" />
            </figure>
        </div>
    </div>
</section>;

const ImpactSection = () => <section className="wrapper bg-gradient-pale-fuchsia">
    <div className="container pt-10 pb-12 pb-md-15">
        <div className="row align-items-center">
            <div className="col-12">
                <h1 className="display-2 text-navy mb-4" align="center"><strong>No matter what the role, our volunteers make a long lasting impact on the lives of the families we grant the wishes for.</strong></h1>
            </div>
        </div>
    </div>
    <div className="container mb-15">
        <div className="row">
            <div className="col-lg-3">
                <h1 className="display-1 pe-xl-15" align="center"><strong>Ways</strong> to <strong className="text-gradient gradient-1">help</strong></h1>
            </div>
            <div className="col-lg-9">
                <div className="row counter-wrapper text-center">
                    <div className="col-md-4">
                        <h2 className="mt-5 mb-3">Special Projects</h2>
                        <p className="mb-0">Help with special projects like mailings, database input/management and family contacts</p>
                    </div>
                    <div className="col-md-4">
                        <h2 className="mt-5 mb-3">Office Assistants</h2>
                        <p className="mb-0">Coordinate a variety of in-office and clerical projects</p>
                    </div>
                    <div className="col-md-4">
                        <h2 className="mt-5 mb-3">Special Events</h2>
                        <p className="mb-0">Assist at fundraising events, golf outings, holiday parties and other events held on behalf of our wish children</p>
                    </div>
                </div>
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

const Volunteer = () => <div className="content-wrapper">
    <div className='bg-pale-red'><Header /></div>
    <VolunteerSection />
    <ImpactSection />
    <DividerSection />
    <Footer />
</div>;

export default Volunteer;
