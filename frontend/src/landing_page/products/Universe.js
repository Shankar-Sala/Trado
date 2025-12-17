import React from "react";

function Universe() {
  return (
    <div className="container my-5">
      {/* Heading */}
      <div className="row text-center mb-5">
        <h2 className="fw-semibold">The Trado Universe</h2>
        <p className="text-muted mt-2">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* Universe Grid */}
      <div className="row text-center g-4">
        {/* Trado Fund House */}
        <div className="col-12 col-md-4">
          <img
            src="media/images/tradoFundhouse.png"
            alt="Trado Fund House"
            className="img-fluid mb-3"
            style={{ maxHeight: "55px" }}
          />
          <p className="text-muted small">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        {/* Sensibull */}
        <div className="col-12 col-md-4">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            className="img-fluid mb-3"
            style={{ maxHeight: "55px" }}
          />
          <p className="text-muted small">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        {/* Tijori */}
        <div className="col-12 col-md-4">
          <img
            src="media/images/tijori.svg"
            alt="Tijori"
            className="img-fluid mb-3"
            style={{ maxHeight: "55px" }}
          />
          <p className="text-muted small">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        {/* Streak */}
        <div className="col-12 col-md-4 mt-md-4">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            className="img-fluid mb-3"
            style={{ maxHeight: "55px" }}
          />
          <p className="text-muted small">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        {/* Smallcase */}
        <div className="col-12 col-md-4 mt-md-4">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid mb-3"
            style={{ maxHeight: "55px" }}
          />
          <p className="text-muted small">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        {/* Ditto */}
        <div className="col-12 col-md-4 mt-md-4">
          <img
            src="media/images/ditto.png"
            alt="Ditto"
            className="img-fluid mb-3"
            style={{ maxHeight: "55px" }}
          />
          <p className="text-muted small">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="row justify-content-center mt-5">
  <div className="col-auto">
    <button className="btn btn-primary px-4 py-2">
      Sign up for free
    </button>
  </div>
</div>
    </div>
  );
}

export default Universe;
