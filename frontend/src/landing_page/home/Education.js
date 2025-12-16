import React from "react";
import { Link } from "react-router-dom";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* Image Section */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/education.svg"
            alt="Market education"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

        {/* Content Section */}
        <div className="col-12 col-md-6 px-4 px-md-5 text-center text-md-start">
          <h1 className="mb-3">Free and open market education</h1>

          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <Link
            to="/varsity"
            style={{ textDecoration: "none" }}
            className="d-inline-block mb-4"
          >
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </Link>

          <p className="text-muted mt-4">
            TradingQ&A, the most active trading and investment community in India
            for all your market related queries.
          </p>

          <Link
            to="/trading-qa"
            style={{ textDecoration: "none" }}
          >
            TradingQ&A <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Education;
