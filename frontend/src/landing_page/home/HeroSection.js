import React from "react";

function HeroSection() {
  return (
    <div className="container py-4 py-md-5 mb-5">
      <div className="row justify-content-center text-center">

        {/* Hero Image */}
        <div className="col-12">
          <img
            src="media/images/homeHero.png"
            alt="Hero"
            className="img-fluid mb-4 mb-md-5"
            style={{ maxWidth: "100%" }}
          />
        </div>

        {/* Heading */}
        <div className="col-12 col-md-10 col-lg-8">
          <h1 className="mt-3 mt-md-5 display-6 display-md-5">
            Invest in everything
          </h1>

          <p className="text-muted fs-6 fs-md-5 mt-3">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>

          {/* CTA Button */}
          <button
            className="btn btn-primary fs-6 fs-md-5 px-4 px-md-5 py-2 py-md-3 mt-3 mb-4"
            style={{ width: "auto" }}
          >
            Signup Now
          </button>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;
