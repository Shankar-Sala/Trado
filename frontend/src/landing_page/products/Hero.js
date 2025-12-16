import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <div className="container text-center py-5">
        <h1>Products</h1>
        <h3 className="text-muted">
          Sleek, modern, and intuitive trading platforms
        </h3>

        <p className="mt-3">
          Check out our{" "}
          <Link to="/investments" style={{ textDecoration: "none" }}>
            investment offerings
          </Link>{" "}
          <i className="fa-solid fa-arrow-right"></i>
        </p>
      </div>
    </div>
  );
}

export default Hero;
