import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="Largest Broker" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Trado clients contribute to over 15% of all retail order
            volumes in india daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <p><li>Futures and Options</li></p>
                <p><li>Commodity derivatives</li></p>
                <p><li>Currency derivatives</li></p>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <p><li>Stock & IPOs</li></p>
                <p><li>Direct manual funds</li></p>
                <p><li>Bonds and Govt. Securities</li></p>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default Awards;
