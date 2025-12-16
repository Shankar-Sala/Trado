import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* Left Content */}
        <div className="col-12 col-md-5 mb-4 mb-md-0 text-center text-md-start">
          <h1 className="mb-3">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <Link to="/pricing" style={{ textDecoration: "none" }}>
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

        {/* Right Pricing Cards */}
        <div className="col-12 col-md-7">
          <div className="row text-center g-3">
            
            <div className="col-12 col-sm-6">
              <div className="p-4 border rounded h-100">
                <h1 className="mb-3">₹0</h1>
                <p>
                  Free equity delivery and <br />
                  direct mutual funds
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <div className="p-4 border rounded h-100">
                <h1 className="mb-3">₹20</h1>
                <p>Intraday and F&O</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
