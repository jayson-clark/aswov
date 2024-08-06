import React from 'react';

import Header from '../root/Header';
import Footer from '../root/Footer';

const MainSection = () => <section className="wrapper bg-pale-yellow">
    <div className="container pt-10 pb-10 pt-md-10 pb-md-10 text-center">
        <div className="row">
            <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto" data-cues="slideInDown" data-group="page-title">
                <h2 className="fs-16 text-uppercase ls-xl text-sky mb-4">
                    <i className='fas fa-star text-yellow'></i> Three Types of Wishes...
                </h2>
                <h1 className="display-1 text-navy fs-60 mb-4 px-md-15 px-lg-0">
                    <strong>Types of</strong> <span className="underline-3 style-2 yellow"><strong className="text-gradient gradient-7">Wishes</strong></span>
                </h1>
                <p className="lead fs-24 text-navy lh-sm mb-7 mx-md-13 mx-lg-10">Wishes can captivate children and help take them away from the pain and uncertainty caused by their disorder </p>
            </div>
        </div>
    </div>
    <figure className="position-absoute" style={{ bottom: 0, left: 0, zIndex: 2 }} data-cues="slideInDown" data-group="page-title" data-delay="200">
        <img src="./assets/img/wishes/wishes-background.jpg" srcSet="./assets/img/wishes/wishes-background@2x.jpg 2x" alt="" />
    </figure>
</section>;

const WishItem = ({ title, image, text, alignRight }) => <div className="row gx-lg-8 gx-xl-12 gy-10 pb-10 align-items-center">
    {alignRight ? (
        <>
            <div className="col-lg-4 order-lg-2">
                <figure className="rounded shadow-lg"><img src={image} srcSet={`${image} 2x`} alt="" /></figure>
            </div>
            <div className="col-lg-8">
                <h1 className="display-1 text-navy mb-3" align="right">{title}</h1>
                <p align="right">{text}</p>
            </div>
        </>
    ) : (
        <>
            <div className="col-lg-4">
                <figure className="rounded shadow-lg"><img src={image} srcSet={`${image} 2x`} alt="" /></figure>
            </div>
            <div className="col-lg-8">
                <h1 className="display-1 text-navy mb-3">{title}</h1>
                <p>{text}</p>
            </div>
        </>
    )}
</div>;

const WishesSection = () => <section className="wrapper bg-light pt-10">
    <div className="container pt-0 pb-10">
        <div className="tab-content mt-10 mt-lg-8">
            <div className="tab-pane fade show active" id="tab2-1">
                <WishItem
                    title={<span>A <strong><span className="underline-3 style-2 sky">Special Gift</span></strong></span>}
                    image="./assets/img/donate/special-gift.jpg"
                    text="Computers, televisions, stereos, video games, even a potbellied pig are included among the wishes we have granted. These wishes can captivate children and help take them away from the pain and uncertainty caused by their disorder."
                />
                <WishItem
                    title={<span>A <strong><span className="underline-3 style-2 sky">Special Place</span></strong></span>}
                    image="./assets/img/wishes/special-place.jpg"
                    text="Whether it’s a visit to a special friend or relative, amusement park, or other wish destination, A Special Wish Foundation, Inc. handles complete travel and lodging arrangements for the child and members of the immediate family. This includes air transportation, hotel expenses, meals, spending money, and all other aspects of the travel wish."
                    alignRight={true}
                />
                <WishItem
                    title={<span>A <strong><span className="underline-3 style-2 sky">Special Hero</span></strong></span>}
                    image="./assets/img/wishes/special-hero.jpg"
                    text="So many children dream about someday meeting their special hero, whether it be a sports figure, government leader, rock star or other entertainer. A personal visit is a true morale boost for the child, as well as a memory to hang on to during unsure times ahead."
                />
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

const WishTypes = () => <div className="content-wrapper">
    <div className='bg-pale-yellow'><Header /></div>
    <MainSection />
    <WishesSection />
    <DividerSection />
    <Footer />
</div>;

export default WishTypes;
