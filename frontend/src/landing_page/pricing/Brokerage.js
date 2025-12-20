import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row px-3 py-5 mt-5 border-top">
        
        {/* Left Section */}
        <div className="col-12 col-md-8 mb-4">
          <a href="#" className="text-decoration-none">
            <h3 className="fs-5 text-center text-md-start">
              Brokerage calculator
            </h3>
          </a>

          <ul
            className="text-muted mt-3"
            style={{ lineHeight: "2", fontSize: "13px" }}
          >
            <li>Call & Trade and RMS auto-squareoff: ₹50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical contract notes: ₹20 per note + courier charges.</li>
            <li>NRI (non-PIS): 0.5% or ₹100 per order.</li>
            <li>NRI (PIS): 0.5% or ₹200 per order.</li>
            <li>Debit balance orders charged ₹40 instead of ₹20.</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="col-12 col-md-4 text-center text-md-start">
          <a href="#" className="text-decoration-none">
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
