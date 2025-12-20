import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row py-5">
        <h1 className="fs-2 mb-4 text-center text-md-start">
          To create a ticket, select a relevant topic
        </h1>

        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-lg-4 mb-4"
          >
            <div className="p-4 border rounded h-100">
              <h4 className="mb-3">
                <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
                Account Opening
              </h4>

              <ul className="list-unstyled">
                <li><a href="#" className="text-decoration-none">Online Account Opening</a></li>
                <li><a href="#" className="text-decoration-none">Offline Account Opening</a></li>
                <li><a href="#" className="text-decoration-none">Company, Partnership and HUF Account</a></li>
                <li><a href="#" className="text-decoration-none">Opening</a></li>
                <li><a href="#" className="text-decoration-none">NRI Account Opening</a></li>
                <li><a href="#" className="text-decoration-none">Charges at Trado</a></li>
                <li><a href="#" className="text-decoration-none">Trado IDFC FIRST Bank 3-in-1 Account</a></li>
                <li><a href="#" className="text-decoration-none">Getting Started</a></li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
