import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Header */}
      <div className="row px-3 py-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-3 fs-6 fs-md-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>

      {/* Cards */}
      <div className="row px-3 py-5 text-center">
        <div className="col-12 col-md-4 mb-4">
          <img
            src="media/images/pricingEquity.svg"
            className="img-fluid mb-3"
            alt="Equity"
          />
          <h2 className="fs-5">Free equity delivery</h2>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
          </p>
        </div>

        <div className="col-12 col-md-4 mb-4">
          <img
            src="media/images/intradayTrades.svg"
            className="img-fluid mb-3"
            alt="Intraday"
          />
          <h2 className="fs-5">Intraday and F&O trades</h2>
          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order.
          </p>
        </div>

        <div className="col-12 col-md-4 mb-4">
          <img
            src="media/images/pricingEquity.svg"
            className="img-fluid mb-3"
            alt="MF"
          />
          <h2 className="fs-5">Free direct MF</h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹0 commissions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
