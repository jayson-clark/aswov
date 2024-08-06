import React from 'react';

import Header from '../root/Header';
import Footer from '../root/Footer';

const ImageSection = () => <section>
    <div className="container pt-0 pb-10">
        <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-0 mx-auto text-center">
                <h2 className="fs-16 text-uppercase text-light-purple mb-3">You & ASW</h2>
                <h3 className="display-3 text-grape mb-10 px-xl-10 px-xxl-15">
                    <strong>Our <span className="underline-3 style-2 yellow">Story</span></strong>
                </h3>
            </div>
        </div>
        <div className="row pb-10 gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6">
                <div className="row gx-md-5 gy-5">
                    <div className="col-md-6">
                        <figure className="rounded shadow-lg">
                            <img src="./assets/img/logos/aswov-logo.jpg" srcSet="./assets/img/logos/aswov-logo@2x.jpg 2x" alt="A Special Wish Ohio Valley Logo" />
                        </figure>
                    </div>
                    <div className="col-md-6 align-self-end">
                        <figure className="rounded">
                            <img src="./assets/img/40yrsgraphic.png" srcSet="./assets/img/40yrsgraphic.png" alt="" />
                        </figure>
                    </div>
                    <div className="col-12">
                        <figure className="rounded mx-md-5">
                            <img src="./assets/img/volunteers/volunteer-story.jpg" srcSet="./assets/img/volunteers/volunteer-story@2x.jpg 2x" alt="" />
                        </figure>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <p>A Special Wish Foundation, Inc. (ASW) is a non-profit charitable organization dedicated to granting the wishes of children under the age of 21 who have been diagnosed with a life-threatening disorder.</p>
                <h1 className="display-2 text-gradient gradient-5 mb-4">
                    <strong>In fact, we are the only major wish granting organization in the US that grants wishes to qualifying infants, children, and adolescents from birth up to the age of 21.</strong>
                </h1>
                <p>Founded in 1982, A Special Wish Foundation was one of the first wish-granting organizations in the United States. Since then, wishes have been granted to thousands of qualifying children.</p>
            </div>
        </div>
    </div>
</section>;

const WhyChooseSection = () => <section>
    <div className="container pt-0 pb-10">
        <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-11">
            <div className="col-lg-4">
                <h2 className="fs-16 text-uppercase text-sky mb-3" align="center">Why Choose ASW?</h2>
                <h1 className="display-1 mb-3 pe-xl-10" align="center">
                    What makes <br /> us <span className="underline-3 style-2 fuchsia"><strong>different?</strong></span>
                </h1>
            </div>
            <div className="col-lg-8 mt-lg-2">
                <div className="row align-items-center counter-wrapper gy-6 text-center">
                    <div className="col-md-3">
                        <h2 className="counter text-purple">30</h2>
                        <p>Years Granting Wishes</p>
                    </div>
                    <div className="col-md-3">
                        <h2 className="counter text-violet">150+</h2>
                        <p>Local Wishes Granted</p>
                    </div>
                    <div className="col-md-3">
                        <h2 className="counter text-grape">1000s</h2>
                        <p>of Lives Changed</p>
                    </div>
                    <div className="col-md-3">
                        <h2 className="counter text-sky">1</h2>
                        <p>Employee</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-content mt-6 mt-lg-8">
            <div class="tab-pane fade show active" id="tab2-1">
                <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                    <div class="col-lg-6">
                        <figure class="rounded shadow-lg"><img src="./assets/img/our-story/group_picture.jpg" srcset="./assets/img/chapter/our-chapter@2x.jpg 2x" alt="" /></figure>
                    </div>
                    <div class="col-lg-6">
                        <h1 class="text-grape mb-3">Our <strong>Chapter</strong> <span class="underline-3 style-1 fuchsia">&nbsp;(ASWOV)&nbsp;</span></h1>
                        <p><strong><span class="underline grape">A Special Wish Ohio Valley
                            Chapter</span>&nbsp;</strong> was formed in 1992. In the last 30 years, with
                            the help and generousity of so many, we have granted over 150 wishes to local
                            children right here in our communities in the Ohio Valley. We are thankful to the
                            many Ohio Valley area companies, organizations, individuals and volunteers for their
                            generous donations and support.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>;

const MissionSection = () => <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-300 mt-10" data-image-src="./assets/img/bg/bg16.png" style={{ backgroundImage: 'url("./assets/img/bg/bg16.png")' }}>
    <div className="container py-15 py-md-17 pb-md-19">
        <div className="row align-items-center gy-8 mb-10 mb-lg-5">
            <div className="col-md-12 col-lg-2 col-xl-2 text-center text-lg-start">
                <h1 className="display-1 text-white mb-0 pe-xl-10 pe-xxl-15" align="center">
                    <strong>Our <span className="underline-3 style-2 yellow">Mission</span> </strong>
                </h1>
            </div>
            <div className="col-md-12 col-lg-10 col-xl-10">
                <div className="row gy-6 text-center">
                    <div className="col-md-7 text-center">
                        <div className="card bg-yellow shadow-lg">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-lg-12">
                                        <h2 className="text-navy mb-0" align="center">
                                            "To enhance the quality of life for those children having a life-threatening disorder by granting their special wish."
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 text-center">
                        <h3 className="text-white mb-0" align="center">
                            We lend both emotional and social support to the families of our special wish recipients by providing the opportunity for them to share in the wish activity, and enable them to gather some lasting memories to cherish in the future.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="overflow-hidden">
        <div className="divider text-white mx-n2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                <path fill="currentColor" d="M1260.2,37.86c-60-10-120-20.07-180-16.76-60,3.71-120,19.77-180,18.47-60-1.71-120-21.78-180-31.82s-120-10-180-1.7c-60,8.73-120,24.79-180,28.5-60,3.31-120-6.73-180-11.74s-120-5-150-5H0V100H1440V49.63C1380.07,57.9,1320.13,47.88,1260.2,37.86Z" />
            </svg>
        </div>
    </div>
</section>;

const StaffSection = () => <section className="wrapper bg-light mb-15">
    <div className="container py-14 py-lg-16 pb-lg-0">
        <div className="row align-items-center">
            <h3 className="display-2 text-navy mb-10" align="center">
                <span className="underline-3 style-3 purple"><strong>Our Staff</strong></span>
            </h3>
        </div>
        <div className="row gx-lg-8 gx-xl-0 align-items-center mb-10">
            <div className="col-lg-4 col-xl-4 offset-xl-1 d-lg-flex position-relative">
                <figure>
                    <img className="rounded-circle w-40 mx-auto mb-4" src="./assets/img/board/annmarie-ogrady.jpg" srcSet="./assets/img/board/annmarie-ogrady@2x.jpg 2x" alt="" />
                </figure>
            </div>
            <div className="col-lg-8 col-xl-7 col-xxl-7">
                <blockquote className="icon fs-lg">
                    <p>Annmarie O’Grady is a dynamic, community-focused individual who puts her heart and soul into whatever she does. As the Executive Director for A Special Wish Foundation, she is the perfect fit to continue the organization’s mission.</p>
                    <p>Annmarie is involved in her community. She proudly serves on the Board of Directors for the Belmont County Port Authority, is a member of the Rotary Club of St. Clairsville and is the Vice President of the Red Devil Club at St. Clairsville High School.</p>
                    <div className="blockquote-details">
                        <div className="info ps-0">
                            <h3 className="text-purple mb-1">Annmarie O'Grady</h3>
                            <p className="mb-0">Executive Director</p>
                        </div>
                    </div>
                </blockquote>
            </div>
        </div>
        <div className="alert alert-info alert-icon" role="alert">
            <i className="uil uil-exclamation-circle"></i> We only have one paid employee. The rest of our organization is made of up dedicated volunteers who devote their spare time to helping our local communities. By doing this we are able to ensure that our funds are spent where they are needed most. The children of our communities.
        </div>
    </div>
</section>;

const BoardMember = ({ name, title, image, bioId, bioText }) => <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-5">
    <div className="item">
        <center>
            <img className="rounded-circle w-20 mx-auto mb-4" src={image} alt={name} />
            <h4 className="text-grape mb-1">{name}</h4>
            <div className="meta mb-2">{title}</div>
            <a href="#" className="btn btn-outline-navy rounded-pill" data-bs-toggle="modal" data-bs-target={`#${bioId}`}>Bio +</a>

            <div className="modal fade modal-bottom-center" id={bioId} tabIndex="-1">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-body p-6">
                            <div className="row">
                                <div className="col-md-12 col-lg-10 my-auto align-items-center">
                                    <p className="mb-5">{bioText}</p>
                                </div>
                                <div className="col-md-4 col-lg-2 text-md-end my-auto">
                                    <a href="#" className="btn btn-soft-aqua rounded-pill" data-bs-dismiss="modal" aria-label="Close">Got It!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </center>
    </div>
</div>;

const TeamSection = () => <section className="wrapper bg-light">
    <div className="container py-6 py-md-8">
        <div className="row align-items-center">
            <h2 className="fs-24 text-uppercase ls-xl text-purple mb-4" align="center">
                <i className="fas fa-heart text-soft-blue"></i> Meet Our Team
            </h2>
            <h3 className="display-2 text-navy mb-10" align="center">
                <strong>Our</strong> Board of <strong><span className="underline-3 style-2 purple">Directors</span></strong>
            </h3>
        </div>
        <div className="row align-items-center mb-5">
            <BoardMember
                name="Scott Reager"
                title="President"
                image="./assets/img/board/scott-reager.jpg"
                bioId="modal-03"
                bioText="Scott strives on helping businesses & organizations grow and prosper. He loves interacting and meeting new people and sharing stories of other's people's passion. His passion for this makes his contributions invaluable."
            />
            <BoardMember
                name="Rick Richmond"
                title="Vice President"
                image="./assets/img/board/rick-richmond.jpg"
                bioId="modal-05"
                bioText="Rick has been a board member with A Special Wish for many years and his wife, Susan, is an active volunteer at A Special Wish functions. Their contributions have been invaluable in helping assist our Chapter in achieving our goals."
            />
            <BoardMember
                name="Denise Penz"
                title="Treasurer"
                image="./assets/img/board/denise-penz.jpg"
                bioId="modal-02"
                bioText="In her business and personal life, Denise enjoys nothing more than helping people. She is particularly interested in causes for children, the empowerment of women and minorities, and veterans. In keeping with those passions, Denise also holds a board seat with and The YWCA Wheeling. She serves as Board Member Emeritus for Wheeling Country Day School and is a founding member of Women's Impact."
            />
            <BoardMember
                name="Ashley Spencer"
                title="Secretary"
                image="./assets/img/board/ashley-spencer.jpg"
                bioId="modal-04"
                bioText="Ashley is a lifelong St. Clairsville resident and Red Devil graduate. She is extremely involved in her community and advocates in any way for children. Ashley served for many years assisting Tri County Help Center in fundraising. She is also a member of the St. Clairsville Sunrise Rotary and the Red Devil Club. She has helped organize a variety of fundraisers for St. Clairsville High School as well as other community events."
            />
        </div>
        <div className="row align-items-center mb-5">
            <BoardMember
                name="Melissa Androsko"
                title="Board Member"
                image="./assets/img/board/melissa-androsko.jpg"
                bioId="modal-06"
                bioText="Melissa is a registered nurse at Wheeling Hospital who loves making a patient smile and giving them encouraging words. These caring qualities are one of the reasons Melissa is a long-standing board member for A Special Wish."
            />
            <BoardMember
                name="Jane Hanlin"
                title="Board Member"
                image="./assets/img/board/jane-hanlin.jpg"
                bioId="modal-09"
                bioText="Jane, our newest board member, is currently the prosecuting attorney in Jefferson County. She is also the Vice President of the Ohio Prosecuting Attorney's Association. She and her husband Jason, a police officer, are dedicated to serving their communities through their occupations. A Special Wish Foundation has become a new avenue for Jane to serve and give back to her community."
            />
            <BoardMember
                name="Amanda Brown"
                title="Board Member"
                image="./assets/img/our-story/amanda_brown.jpg"
                bioId="modal-10"
                bioText="Amanda Brown is a 2003 graduate from Wheeling Jesuit University with a Bachelor of Arts degree in Organizational Leadership and Development. Amanda is also a 2001 Belmont College graduate with an Associates in Business Management and Data Processing. Amanda currently serves as the Community Reinvestment Act Chair at WesBanco Bank Inc, committee member for the Business Resource Network, board member of the United Way Upper Ohio Valley, and also serves on the executive allocations committee for the United Way Upper Ohio Valley. Amanda previously served as the Vice President for Information Helpline UOV, board member for Belmont County Habitat for Humanity, auxiliary committee for Harmony House Belmont County and was a board member of the Veteran Stand Down Association. Amanda has been in banking for over 28 years. She currently leads the Upper Ohio Valley Banking Center network of 26 locations. Her favorite quote is 'Bloom where you are planted.'"
            />
            <BoardMember
                name="Amanda Mosman"
                title="Board Member"
                image="./assets/img/our-story/amanda_mosman.jpg"
                bioId="modal-11"
                bioText="As a certified pediatric physician assistant, Amanda has delivered medical care to the families of the Ohio Valley for over 16 years. With her additional international board certification as a lactation consultant, she specializes in breastfeeding and in the care of newborns. Amanda currently practices in a very bustling pediatric practice in Glen Dale, WV at WVU Medicine Reynolds Memorial Hospital. Amanda has spent significant time doing mission work and has developed a deep understanding of healthcare challenges in developing countries. Her work with special needs orphans has allowed her to care for vulnerable populations and her passion lies in providing healing and support to children, while empowering their families to thrive. With a colorful background and a heart dedicated to pediatric care, Amanda is committed to making a lasting impact in the lives of those she serves."
            />
        </div>
        <div className="row align-items-center mt-15">
            <div className="row align-items-center">
                <h3 className="display-2 text-navy mb-10" align="center">
                    <strong>Our <span className="underline-3 style-2 underline-gradient-3">Advisory Board</span></strong>
                </h3>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-0">
                <p className="mb-0" align="center">
                    JP Dutton<br />
                    Anne Haning<br />
                    Larry Cain<br />
                    Susan Regrut<br />
                    Michael McTeague<br />
                    Lacy Russell
                </p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-0">
                <p className="mb-0" align="center">
                    Dana Roscoe<br />
                    Debbie Rice<br />
                    Carrie McKenzie<br />
                    Jennifer Compston-Strough<br />
                    Cat Litchko<br />
                    Jeremiah Freeland
                </p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-0">
                <p className="mb-0" align="center">
                    Dan Milleson<br />
                    Renee Storm<br />
                    Kelly Baker<br />
                    Jolie Yuncke<br />
                    Jill Hissom
                </p>
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

const OurStory = () => <div className="content-wrapper bg-gradient-grape">
    <Header />
    <br></br>
    <ImageSection />
    <WhyChooseSection />
    <MissionSection />
    <StaffSection />
    <TeamSection />
    <DividerSection2 />
    <Footer />
</div>;

export default OurStory;
