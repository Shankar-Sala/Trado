import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container">

      {/* Heading */}
      <div className="row py-4 py-md-5 mt-4 mt-md-5 mb-4 mb-md-5">
        <div className="col-12">
          <h1 className="fs-4 fs-md-3 text-center">
            We pioneered the discount broking model in India
            <br />
            Now, we are breaking ground with our technology.
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="row border-top text-muted py-4 py-md-5">
        
        <div className="col-12 col-md-6 px-3 px-md-5 mb-4 mb-md-0">
          <p className="lh-lg">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company Zerodha,
            a combination of Zero and "Rodha", the Sanskrit word for barrier.
          </p>

          <p className="lh-lg">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p className="lh-lg">
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>

        <div className="col-12 col-md-6 px-3 px-md-5">
          <p className="lh-lg">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p className="lh-lg">
            <Link to="/rainmatter" style={{ textDecoration: "none" }}>
              Rainmatter
            </Link>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>

          <p className="lh-lg">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Hero;
