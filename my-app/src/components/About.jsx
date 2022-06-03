import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="aboutUs fw-bold mb-4"> About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur quis saepe modi natus et, doloremque reprehenderit,
              voluptates, amet consequatur harum sequi enim recusandae facilis!
              Iure eos labore sunt officiis corporis sapiente facere iste, ipsum
              sequi expedita. Nam obcaecati eum similique et ipsa harum quam
              expedita exercitationem sint iure, minima pariatur deleniti
              doloremque ratione eos omnis totam maxime minus. Delectus,
              deserunt unde architecto dolore distinctio, quisquam officiis
              consequatur eum hic dolorum quis animi perferendis maxime, quasi
              obcaecati modi sapiente a quo perspiciatis fugit laboriosam.
              Officiis quidem, soluta qui repellat, nihil totam id quia expedita
              distinctio modi labore, quasi aperiam nulla suscipit.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/images/home/img1.jpg"
              height="400px"
              width="100%"
              alt="About Us"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
