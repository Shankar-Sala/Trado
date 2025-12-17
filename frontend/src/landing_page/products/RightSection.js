import React from "react";

function RightImage({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-12 col-md-6">
          <h1 className="mb-3">{productName}</h1>
          <p className="mb-4">{productDesription}</p>

          <a href={learnMore} style={{ textDecoration: "none" }}>
            Learn More <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-6 text-center">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightImage;
