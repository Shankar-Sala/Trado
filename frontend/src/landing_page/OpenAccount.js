import React from 'react';

function OpenAccount() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
      <div className="text-center">
        <h1 className="display-5 mb-3">Open a Trado account</h1>
        <p className="fs-5 text-muted mb-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <button className="btn btn-primary px-4 py-3 fs-5">
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
