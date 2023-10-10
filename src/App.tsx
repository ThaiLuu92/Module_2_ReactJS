import React from 'react';
import './App.css';
import { images } from './img';
import SpinnerStart from './Component/SpinnerStart';
import NavbarStart from './Component/NavbarStart';
import CarouselStart from './Component/CarouselStart';
import AboutStart from './Component/AboutStart';
import ServiceStart from './Component/ServiceStart';
import Price from './Component/Price';





function App() {
  return (
    <>
      {/* Spinner Start */}
      <SpinnerStart />
      {/* Spinner End */}
      {/* Navbar Start */}
      <NavbarStart/>
      {/* Navbar End */}
      {/* Carousel Start */}
      <CarouselStart/>
      {/* Carousel End */}
      {/* About Start */}
      <AboutStart/>
      {/* About End */}
      {/* Service Start */}
      <ServiceStart/>
      {/* Service End */}
      {/* Price Start */}
      <Price/>
      {/* Price End */}
      {/* Team Start */}
       
      {/* Team End */}
      {/* Working Hours Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="h-100">
                <img className="img-fluid h-100" src={images.img_open} alt="" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="bg-secondary h-100 d-flex flex-column justify-content-center p-5">
                <p className="d-inline-flex bg-dark text-primary py-1 px-4 me-auto">
                  Working Hours
                </p>
                <h1 className="text-uppercase mb-4">
                  Professional Barbers Are Waiting For You
                </h1>
                <div>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <h6 className="text-uppercase mb-0">Monday</h6>
                    <span className="text-uppercase">09 AM - 09 PM</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <h6 className="text-uppercase mb-0">Tuesday</h6>
                    <span className="text-uppercase">09 AM - 09 PM</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <h6 className="text-uppercase mb-0">Wednesday</h6>
                    <span className="text-uppercase">09 AM - 09 PM</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <h6 className="text-uppercase mb-0">Thursday</h6>
                    <span className="text-uppercase">09 AM - 09 PM</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <h6 className="text-uppercase mb-0">Friday</h6>
                    <span className="text-uppercase">09 AM - 09 PM</span>
                  </div>
                  <div className="d-flex justify-content-between py-2">
                    <h6 className="text-uppercase mb-0">Sat / Sun</h6>
                    <span className="text-uppercase text-primary">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Working Hours End */}
      {/* Testimonial Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <p className="d-inline-block bg-secondary text-primary py-1 px-4">
              Testimonial
            </p>
            <h1 className="text-uppercase">What Our Clients Say!</h1>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div
              className="testimonial-item text-center"
              data-dot={`<img class='img-fluid' src=${images.img_testimonial_1} alt=''>`}
            >
              <h4 className="text-uppercase">Client Name</h4>
              <p className="text-primary">Profession</p>
              <span className="fs-5">
                Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
                duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
                erat magna elitr erat sit sit erat at rebum justo sea clita.
              </span>
            </div>
            <div
              className="testimonial-item text-center"
              data-dot={`<img class='img-fluid' src=${images.img_testimonial_2} alt=''>`}
            >
              <h4 className="text-uppercase">Client Name</h4>
              <p className="text-primary">Profession</p>
              <span className="fs-5">
                Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
                duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
                erat magna elitr erat sit sit erat at rebum justo sea clita.
              </span>
            </div>
            <div
              className="testimonial-item text-center"
              data-dot={`<img class='img-fluid' src=${images.img_testimonial_3} alt=''>`}
            >
              <h4 className="text-uppercase">Client Name</h4>
              <p className="text-primary">Profession</p>
              <span className="fs-5">
                Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
                duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
                erat magna elitr erat sit sit erat at rebum justo sea clita.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
      {/* Footer Start */}
      <div
        className="container-fluid bg-secondary text-light footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <h4 className="text-uppercase mb-4">Get In Touch</h4>
              <div className="d-flex align-items-center mb-2">
                <div className="btn-square bg-dark flex-shrink-0 me-3">
                  <span className="fa fa-map-marker-alt text-primary" />
                </div>
                <span>123 Street, New York, USA</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="btn-square bg-dark flex-shrink-0 me-3">
                  <span className="fa fa-phone-alt text-primary" />
                </div>
                <span>+012 345 67890</span>
              </div>
              <div className="d-flex align-items-center">
                <div className="btn-square bg-dark flex-shrink-0 me-3">
                  <span className="fa fa-envelope-open text-primary" />
                </div>
                <span>info@example.com</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <h4 className="text-uppercase mb-4">Quick Links</h4>
              <a className="btn btn-link" href="">
                About Us
              </a>
              <a className="btn btn-link" href="">
                Contact Us
              </a>
              <a className="btn btn-link" href="">
                Our Services
              </a>
              <a className="btn btn-link" href="">
                Terms &amp; Condition
              </a>
              <a className="btn btn-link" href="">
                Support
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <h4 className="text-uppercase mb-4">Newsletter</h4>
              <div className="position-relative mb-4">
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
              <div className="d-flex pt-1 m-n1">
                <a className="btn btn-lg-square btn-dark text-primary m-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-lg-square btn-dark text-primary m-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-lg-square btn-dark text-primary m-1" href="">
                  <i className="fab fa-youtube" />
                </a>
                <a className="btn btn-lg-square btn-dark text-primary m-1" href="">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                ©{" "}
                <a className="border-bottom" href="#">
                  Your Site Name
                </a>
                , All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                Designed By{" "}
                <a className="border-bottom" href="https://htmlcodex.com">
                  HTML Codex
                </a>
                <br />
                Distributed By:{" "}
                <a
                  className="border-bottom"
                  href="https://themewagon.com"
                  target="_blank"
                >
                  ThemeWagon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up" />
      </a>
      {/* JavaScript Libraries */}
      {/* Template Javascript */}
    </>

  );
}

export default App;
