import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      {/* Top Bar */}
      <div
        className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center px-3 px-md-5 py-4"
        id="supportWrapper"
      >
        <h4 className="support-text mb-2 mb-md-0">Support Portal</h4>
        <a href="#" className="support-link">
          Track Tickets
        </a>
      </div>

      {/* Main Content */}
      <div className="row px-3 px-md-5 py-4">
        {/* Left Section */}
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <h1 className="fs-4 support-text mb-3">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            type="text"
            className="form-control support-input mb-3"
            placeholder="Eg. how do I activate F&O"
          />

          <div className="d-flex flex-wrap gap-3">
            <a href="#" className="support-link">
              Track account opening
            </a>
            <a href="#" className="support-link">
              Track segment activation
            </a>
            <a href="#" className="support-link">
              Intraday margins
            </a>
            <a href="#" className="support-link">
              Kite user manual
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-12 col-lg-6">
          <h1 className="fs-4 support-text mb-3">Featured</h1>
          <ol className="ps-3 support-text">
            <li className="mb-2">
              <a href="#" className="support-link">
                Current Takeovers and Delisting – January 2024
              </a>
            </li>
            <li>
              <a href="#" className="support-link">
                Latest Intraday leverages – MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
