import React from "react";
import "./styles.css";

function Footer() {
  return (
    <div className="footer-light">
    <div className="container">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">Home</li>
              <li className="nav-item mb-2">Features</li>
              <li className="nav-item mb-2">Pricing</li>
              <li className="nav-item mb-2">FAQs</li>
              <li className="nav-item mb-2">About</li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">Home</li>
              <li className="nav-item mb-2">Features</li>
              <li className="nav-item mb-2">Pricing</li>
              <li className="nav-item mb-2">FAQs</li>
              <li className="nav-item mb-2">About</li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">Home</li>
              <li className="nav-item mb-2">Features</li>
              <li className="nav-item mb-2">Pricing</li>
              <li className="nav-item mb-2">FAQs</li>
              <li className="nav-item mb-2">About</li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-outline-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2022 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
            <i className="fa-brands fa-twitter"></i>
            </li>
            <li className="ms-3">
            <i className="fa-brands fa-instagram"></i>
            </li>
            <li className="ms-3">
            <i className="fa-brands fa-facebook"></i>
            </li>
          </ul>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default Footer;
