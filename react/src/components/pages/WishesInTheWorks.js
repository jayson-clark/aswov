import React from 'react';

import Header from '../root/Header';
import Footer from '../root/Footer';

const MainSection = () => <section className="wrapper bg-pale-red">
    <div className="container pt-10 pb-0 pt-md-14 text-center">
        <div className="row gx-md-8 gx-lg-12 gy-3 gy-lg-0 mb-5">
            <div className="col-12">
                <h1 className="display-1 fs-66 lh-xxs mb-0" align="center">
                    <strong>Wishes</strong> in<br /> the <strong>works.</strong>
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
        <div className="row">
            <div className="col-md-8 col-lg-7 col-xl-6 col-xxl-6 mx-auto mb-11 text-center">
                <h3 className="display-1 mb-10 px-xl-10 px-xxl-15">
                    <strong>Remember, time is especially precious to the children and families we serve.</strong>
                </h3>
            </div>
        </div>
    </div>
</section>;

const WaveSection = () => <section className="wrapper bg-white">
    <div className="overflow-hidden">
        <div className="divider text-pale-fuchsia mx-n2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 92.26">
                <path fill="currentColor" d="M1206,21.2c-60-5-119-36.92-291-5C772,51.11,768,48.42,708,43.13c-60-5.68-108-29.92-168-30.22-60,.3-147,27.93-207,28.23-60-.3-122-25.94-182-36.91S30,5.93,0,16.2V92.26H1440v-87l-30,5.29C1348.94,22.29,1266,26.19,1206,21.2Z" />
            </svg>
        </div>
    </div>
</section>;

const WishesInWorksSection = () => <section className="wrapper bg-gradient-pale-fuchsia mb-15">
    <div className="container">
        <div className="row">
            <div className="col-12 mb-11 text-center">
                <h3 className="display-1 mt-5 mb-5 px-xl-10 px-xxl-15">
                    <strong>Help</strong> these <strong>wishes</strong> come true...
                </h3>
            </div>
        </div>
        <div className="grid grid-view projects-masonry">
            <div className="row gx-md-8 gy-10 gy-md-13 isotope">
                <ProjectItem
                    title="Our next wish could be yours..."
                    image="./assets/img/wishes/future-wishes@2x.jpg"
                    text="Refer a child to help make their special wish come true..."
                    buttonText="Refer a Child"
                    buttonLink="mailto:aogrady@spwishov.com"
                />
                <MaverickProject />
            </div>
        </div>
    </div>
</section>;

const ProjectItem = ({ title, image, text, buttonText, buttonLink }) => <div className="project item col-md-6 col-xl-4">
    <figure className="lift rounded mb-6">
        <img src={image} alt="" />
    </figure>
    <div className="project-details d-flex justify-content-center flex-column">
        <div className="post-header">
            <div className="post-category mb-3">
                <span className="badge bg-pale-grape text-grape rounded-pill"><strong>A Special Wish</strong></span>
            </div>
            <h3 className="display-6"><font face="Praline-Regular">{title}</font></h3>
            <p className="mb-5">{text}</p>
            <a href={buttonLink} className="btn btn-soft-grape rounded-pill">{buttonText}</a>
        </div>
    </div>
</div>;

const MaverickProject = () => {
    const sources = [
        '/assets/img/wishes-in-the-works/maverick1.jpg',
        '/assets/img/wishes-in-the-works/maverick2.jpg',
        '/assets/img/wishes-in-the-works/maverick3.jpg',
    ];

    const [srcIndex, setSrcIndex] = React.useState(0);

    const incSrc = (n) => {
        const newIndex = (srcIndex + n + sources.length) % sources.length;
        setSrcIndex(newIndex);
    };

    return <div className="project item col-md-6 col-xl-4">
        <figure className="lift rounded mb-6">
            <button className="btn btn-soft-grape" style={{ padding: '5px', position: 'absolute', left: '3px', top: '165px' }} onClick={() => incSrc(-1)}>&lt;</button>
            <button className="btn btn-soft-grape" style={{ padding: '5px', position: 'absolute', right: '3px', top: '165px' }} onClick={() => incSrc(1)}>&gt;</button>
            <img src={sources[srcIndex]} id="maverick_image" style={{ height: '339px !important', opacity: 1 }} alt="" />
        </figure>
        <div className="project-details d-flex justify-content-center flex-column">
            <div className="post-header">
                <h3 className="display-6"><font face="Praline-Regular">Maverick's getting his wish!</font></h3>
                <p className="mb-5">We had a wonderful day at our golf scramble in May! But the best part of the day was revealing to Maverick that his wish is being granted! He and his family are going to Disney World!</p>
            </div>
        </div>
    </div>;
};

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

const WishesInTheWorks = () => <div className="content-wrapper">
    <div className='bg-pale-red'><Header /></div>
    <MainSection />
    <VolunteerSection />
    <WaveSection />
    <WishesInWorksSection />
    <DividerSection />
    <Footer />
</div>;

export default WishesInTheWorks;
