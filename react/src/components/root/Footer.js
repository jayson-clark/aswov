const Footer = () => <footer className="bg-navy text-inverse">

    <div className="container pt-12 pt-lg-6 pb-13 pb-md-15">
        <div className="row gy-6 gy-lg-0">
            <div className="col-md-6 col-lg-4">
                <div className="widget">
                    <h1 className="display-1 text-white">
                        <font face="Praline-Regular">A Special Wish</font>
                    </h1>
                    <h4 className="display-4 text-gradient gradient-3 mb-4">
                        <font face="Praline-Regular">Ohio Valley Chapter</font>
                    </h4>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="widget">
                    <h1 className="widget-title text-white mb-3">
                        <font face="Praline-Regular">Get in Touch</font>
                    </h1>
                    <address>Post Office Box 674 <br /> St. Clairsville, OH 43950</address>

                    <h4 className="widget-title text-white">Annmarie O'Grady</h4>
                    <p className="mb-0">Executive Director</p>
                    <a href="mailto:aogrady@spwishov.com" className="text-yellow">aogrady@spwishov.com</a>
                    <h2 className="widget-title pt-2"><a href="tel:7404492063">(740) 449-2063</a></h2>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="widget">
                    <h1 className="widget-title text-white mb-3">
                        <font face="Praline-Regular">Change a Life</font>
                    </h1>
                    <p className="mb-4 text-yellow">Help us change the lives of children suffering in the Ohio Valley.</p>
                    <p className="mb-5 text-violet">A Special Wish Foundation has been classified as a 501(c)(3) charitable
                        non-profit corporate.</p>
                </div>
            </div>
            <div className="col-md-6 col-lg-2">
                <div className="widget">
                    <center>
                        <img className="img-fluid" width="70%" src="assets/img/give-ohio-final.png" />
                        <p className="text-yellow" align="center">Give back to your local Ohio Charities</p>
                    </center>
                </div>
            </div>
        </div>
        <hr className="mt-11 mb-5" />
        <div className="d-md-flex align-items-center justify-content-between">
            <p className="mb-2 mb-lg-0">© 2021 A Special Wish Ohio Valley. All rights reserved. <span className="text-sky">Built
                and Donated with <i className="fas fa-heart text-hot-red"></i> by <strong>Matthew Ward</strong> and <strong>Jayson Clark</strong></span></p>
            <nav className="nav social social-white text-md-end">
                <a href="#"><i className="uil uil-twitter"></i></a>
                <a href="#"><i className="uil uil-facebook-f"></i></a>
                <a href="#"><i className="uil uil-instagram"></i></a>
                <a href="#"><i className="uil uil-youtube"></i></a>
            </nav>
        </div>
    </div>
</footer>;

export default Footer;