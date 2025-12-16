import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container text-center py-4 py-md-5">
      
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          
          <h1 className="fs-3 fs-md-2">Products</h1>

          <h3 className="text-muted fs-6 fs-md-5 mt-2">
            Sleek, modern, and intuitive trading platforms
          </h3>

          <p className="mt-3">
            Check out our{" "}
            <Link to="/investments" style={{ textDecoration: "none" }}>
              investment offerings
            </Link>{" "}
            <i className="fa-solid fa-arrow-right ms-1"></i>
          </p>

        </div>
      </div>

    </div>
  );
}

export default Hero;
