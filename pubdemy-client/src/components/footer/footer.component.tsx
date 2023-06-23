import React from "react";
type FooterProps = {
  isCheckoutPage: boolean;
};
export default function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div
        className=" p-3 mt-5"
        style={{ backgroundColor: "#1c1d1f", height: "350px" }}
      >
        <div className="d-flex">
          <p className="text-white mt-2 mb-2">
            Top companies choose{" "}
            <a style={{ color: "#8b3dff" }}>Pubdemy Business</a> to build
            in-demand career skills
          </p>

          <div className="ms-auto" style={{ color: "whitesmoke" }}>
            Nasadaq w box NetApp eventribe
          </div>
        </div>
        <hr style={{ color: "white" }} />
        <div className="d-flex justify-content-end">
          <button
            type="button"
            style={{ color: "white", width: "130px" }}
            className="btn btn-outline-light rounded-0 me-2"
          >
            <span className="me-2">
              <i className="fas fa-globe"></i>
            </span>
            English
          </button>
        </div>

        <div className="container p-4">
          <div className="row">
            <div className="col-md-2 mb-3 mb-md-0" style={{ color: "white" }}>
              <h6>Udemy Business</h6>
              <h6>Get the App</h6>
              <h6>Teach on Udemy</h6>
              <h6>About Us</h6>
            </div>

            <div className="col-md-2 mb-3 mb-md-0" style={{ color: "white" }}>
              <h6>Help and Support</h6>
              <h6>Terms</h6>
              <h6>Contact us</h6>
              <h6>Blog</h6>
            </div>
            <div
              className="col-lg-3 col-md-2 mb-3 mb-md-0"
              style={{ color: "white" }}
            >
              <h6>Privacy Policy</h6>
              <h6>Cookie settings</h6>
              <h6>Sitemap</h6>
              <h6>Accessibility statement</h6>
            </div>
          </div>
        </div>

        <div className="d-flex">
          <a href="/" className="ud-btn ud-btn-large ud-btn-link ud-heading-md">
            <img
              style={{ width: "200px", height: "30px" }}
              src="https://sapient.udemy.com/staticx/udemy/images/v7/logo-ub-inverted.svg"
              alt="Udemy Business"
            />
          </a>
          <div className="ms-auto" style={{ color: "white" }}>
            <p>© 2023 Udemy, Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}







