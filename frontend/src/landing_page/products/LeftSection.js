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
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-6">
          <h1 className="mb-3">{productName}</h1>
          <p className="mb-4">{productDesription}</p>

          {/* Links */}
          <div className="mb-3">
          <a href={tryDemo}  style={{ textDecoration: "none" }}>Try Demo <i className="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore} style={{ marginLeft: "50px" , textDecoration: "none" }}>Learn More <i className="fa-solid fa-arrow-right"></i></a>
          </div>

          {/* App Store / Google Play */}
          <div>
            <a href={googlePlay} className="me-3">
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
