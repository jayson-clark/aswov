import React from 'react';

import Header from '../root/Header';
import Footer from '../root/Footer';

const MainSection = () => <section className="wrapper bg-pale-pink">
    <div className="container pt-10 pb-0 pt-md-14 text-center">
        <div className="row gx-md-8 gx-lg-12 gy-3 gy-lg-0 mb-5">
            <div className="col-lg-6">
                <h1 className="display-1 fs-66 lh-xxs mb-0" align="left">Get <strong>involved</strong> in <br /><strong>your community.</strong></h1>
            </div>
            <div className="col-lg-6">
                <p align="justify">
                    Assist us in achieving our mission to grant as many wishes as we can for our <strong>local children with life-threatening illnesses in the Ohio Valley.</strong> All of our volunteers are local Ohio Valley residents and there are many opportunities at A Special Wish, and <strong>ALL</strong> of them are vital to supporting our mission. Remember, time is especially precious to the children and families we serve.
                </p>
            </div>
        </div>
    </div>
    <figure className="position-absoute" style={{ bottom: 0, left: 0, zIndex: 2 }} data-cues="slideInDown" data-group="page-title" data-delay="600">
        <img src="./assets/img/donate/community.jpg" srcSet="./assets/img/donate/community@2x.jpg 2x" alt="" />
    </figure>
</section>;

const VolunteerSection = () => <section className="wrapper bg-gradient-pale-pink">
    <div className="container pt-10 pb-12 pt-md-14 pb-md-15">
        <div className="row">
            <div className="col-md-8 col-lg-7 col-xl-6 col-xxl-6 mx-auto mb-11 mx-auto text-center">
                <h2 className="fs-24 text-red mb-3">Some <strong>wishes</strong> can't <strong>wait</strong></h2>
                <h3 className="display-1 mb-10 px-xl-10 px-xxl-15"><strong>Remember, time is especially precious to the children and families we serve.</strong></h3>
            </div>
        </div>
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6">
                <figure className="rounded shadow-lg">
                    <img src="./assets/img/get-involved/annmarie_ashley.jpg" srcSet="./assets/img/chapter/our-chapter-volunteer@2x.jpg 2x" alt="" />
                </figure>
                <div style={{ width: '100%', height: '20px' }}></div>
                <figure className="rounded shadow-lg">
                    <img src="./assets/img/get-involved/group.JPG" srcSet="./assets/img/chapter/our-chapter-volunteer@2x.jpg 2x" alt="" />
                </figure>
            </div>
            <div className="col-lg-6">
                <h1 className="display-1 lh-xxs mb-4" align="left"><strong>Volunteer</strong> with <strong className="text-red">Us</strong></h1>
                <p>Volunteers are the backbone of our organization. There are many opportunities at A Special Wish, and ALL of them are vital to supporting our program and <span className="underline red">helping us grant wishes</span>.</p>
                <p>No matter what the role, our volunteers make a long lasting impact on the lives of the families we grant the wishes for.</p>
                <ul className="icon-list bullet-bg bullet-soft-red">
                    <li><i className="uil uil-check"></i><strong>Special Projects:</strong> Help with special projects like mailings, database input/management and family contacts</li>
                    <li><i className="uil uil-check"></i><strong>Office Assistants:</strong> Coordinate a variety of in-office and clerical projects</li>
                    <li><i className="uil uil-check"></i><strong>Special Events:</strong> Assist at fundraising events, golf outings, holiday parties and other events held on behalf of our wish children</li>
                </ul>
                <a href="mailto:aogrady@spwishov.com" className="btn btn-outline-red rounded-pill">Learn More</a>
            </div>
        </div>
    </div>
</section>;

const DividerSection = () => <section className="wrapper bg-white">
    <div className="overflow-hidden">
        <div className="divider text-pale-purple mx-n2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 92.26">
                <path fill="currentColor" d="M1206,21.2c-60-5-119-36.92-291-5C772,51.11,768,48.42,708,43.13c-60-5.68-108-29.92-168-30.22-60,.3-147,27.93-207,28.23-60-.3-122-25.94-182-36.91S30,5.93,0,16.2V92.26H1440v-87l-30,5.29C1348.94,22.29,1266,26.19,1206,21.2Z" />
            </svg>
        </div>
    </div>
</section>;

const SponsorSection = () => <section className="wrapper bg-gradient-pale-purple">
    <div className="container pt-10 pb-12 pt-md-10 pb-md-15">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6">
                <h1 className="display-1 lh-xxs mb-5" align="left"><strong>Sponsor</strong> a <strong>Wish</strong></h1>
                <p className="pe-xxl-2" align="justify">
                    Make a <span className="underline">life changing impact</span> on a child's life by directly sponsoring their Special Wish.
                    You have the ability to single handedly change the life of a child suffering from a life-threatening illness and enable them to gather some lasting memories to cherish in the future.
                </p>
                <p className="mb-8 pe-xxl-2" align="justify">
                    Whenever possible, immediate family members are included in the granting of wishes, to maximize the joy and memories for the child.
                    A Special Wish Foundation offers their services to all qualifying children, and does not discriminate based on race, gender, nationality, or ethnicity.
                </p>
                <a href="mailto:aogrady@spwishov.com" className="btn btn-lg btn-outline-purple rounded-pill">Learn More</a>
            </div>
            <div className="col-lg-6">
                <div className="card shadow-lg bg-dark">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="mt-5 mb-5">
                                <h4 className="display-4 text-bright-yellow mb-3"><strong>Individual donations are still our largest single source of funding. No matter how big or small your donation, your financial support directly benefits wish activities.</strong></h4>
                                <p className="text-white">We are locally operated and funded entirely through the generosity of Ohio Valley residents, businesses, and organizations. No matter how big or small, we treat every donation with extreme financial care. Without you none of this would be possible.</p>
                                <p className="text-purple">All contributions are tax-deductible to the extent allowed by the Internal Revenue Service.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>;

const PlannedGivingSection = () => <section className="wrapper">
    <div className="container pt-10 pb-12 pt-md-10 pb-md-10">
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-10 mb-md-15">
            <div className="col-lg-6">
                <div className="card shadow-lg bg-soft-blue">
                    <div className="card-body">
                        <div className="align-items-center">
                            <h1 className="display-2 mb-5">Planned <strong>Giving</strong></h1>
                            <p className="pe-xxl-2 mb-5" align="justify">
                                We encourage donors to consider consulting their financial planner, attorney, accountant or insurance agent about arranging a planned gift to benefit A Special Wish Foundation.
                                A memorial gift can be arranged in your will, the same way you would bequest a personal gift from your estate.
                                There are also charitable trusts you can arrange in order to donate the trust's income while receiving tax benefits.
                                Your financial advisor can make sure you are receiving the maximum tax and legal advantages allowed in your gift.
                            </p>
                            <a href="mailto:aogrady@spwishov.com" className="btn btn-lg btn-outline-navy rounded-pill">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <h1 className="display-2 mb-5">A <strong>Special Gift</strong></h1>
                <p className="pe-xxl-2 mb-5" align="justify">
                    Whether it is a birthday, wedding, anniversary, graduation, or one of the many other special occasions we celebrate - there seems to always be a time to give a gift to someone.
                    This year, give the gift of <strong>A Special Wish</strong> by making a donation in their name! It's the perfect gift. We will notify them of your thoughtfulness.
                </p>
                <p className="pe-xxl-2 text-sky mb-5" align="justify">
                    <strong>If you have questions or would like to donate a gift to A Special Wish, contact us at <a href="tel:7404492063">740-449-2063</a> or <a href="mailto:aogrady@spwishov.com"><strong>aogrady@spwishov.com</strong></a></strong>
                </p>
            </div>
        </div>
    </div>
</section>;

const ReferChildSection = () => <section className="wrapper bg-light">
    <div className="container pt-10 pb-12 pb-md-10">
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-10 mb-md-15 align-items-center">
            <div className="col-lg-12">
                <h1 className="display-2 mb-5"><strong>Refer</strong> a <strong>Child</strong></h1>
                <p className="pe-xxl-2 mb-5" align="justify">
                    All "Special" Wishes begin with a referral. Anyone can refer a child for consideration to A Special Wish and we will contact the family.
                    Brothers, sisters, neighbors, nurses, doctors, coaches, family and friends can help be part of something special!
                </p>
                <ul className="icon-list bullet-bg bullet-soft-aqua">
                    <li><i className="uil uil-check"></i>Child must have a life threatening disease/condition</li>
                    <li><i className="uil uil-check"></i>Child must be between the ages of birth up to the age of 20</li>
                    <li><i className="uil uil-check"></i>Child has never had a ‘wish’ with any other wish granting organization</li>
                </ul>
                <a href="mailto:aogrady@spwishov.com" className="btn btn-lg btn-outline-navy rounded-pill">Learn More</a>
            </div>
        </div>
    </div>
</section>;

const ReferChildDivider = () => <section className="wrapper bg-light">
    <div className="overflow-hidden">
        <div className="divider text-navy mx-n2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                <path fill="currentColor" d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z" />
            </svg>
        </div>
    </div>
</section>;

const GetInvolved = () => <div className="content-wrapper">
    <div className='bg-pale-red'><Header /></div>
    <MainSection />
    <VolunteerSection />
    <DividerSection />
    <SponsorSection />
    <PlannedGivingSection />
    <ReferChildSection />
    <ReferChildDivider />
    <Footer />
</div>;

export default GetInvolved;
