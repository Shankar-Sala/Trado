import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        
        {/* Image Section */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>

        {/* Content Section */}
        <div className="col-12 col-md-6 px-4 px-md-5 text-center text-md-start">
          <h1 className="mb-3">{productName}</h1>
          <p className="text-muted">{productDesription}</p>

          {/* Links */}
          <div className="d-flex justify-content-center justify-content-md-start gap-4 mt-3">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo
            </a>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More
            </a>
          </div>

          {/* Store Buttons */}
          <div className="d-flex justify-content-center justify-content-md-start gap-4 mt-4 flex-wrap">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </a>

            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;
