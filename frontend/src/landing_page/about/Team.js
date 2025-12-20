import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container">

      {/* Section Title */}
      <div className="row py-4 mt-5 border-top">
        <div className="col-12">
          <h1 className="text-center">People</h1>
        </div>
      </div>

      {/* Team Content */}
      <div className="row text-muted align-items-center py-4">

        {/* Profile */}
        <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="img-fluid rounded-circle mb-3"
            style={{ maxWidth: "220px" }}
          />
          <h4 className="mt-3">Nithin Kamath</h4>
          <h6 className="text-muted">Founder, CEO</h6>
        </div>

        {/* Bio */}
        <div className="col-12 col-md-7 px-3 px-md-5">
          <p className="lh-lg">
            Nithin bootstrapped and founded Trado in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Trado has changed the landscape of the Indian broking industry.
          </p>

          <p className="lh-lg">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p className="lh-lg">Playing basketball is his zen.</p>

          <p className="lh-lg">
            Connect on{" "}
            <Link to="/" style={{ textDecoration: "none" }}>
              Homepage
            </Link>{" "}
            /{" "}
            <Link to="/trading-qna" style={{ textDecoration: "none" }}>
              TradingQnA
            </Link>{" "}
            /{" "}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              Twitter
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Team;
