import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
      <div className="container py-2">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo2.png"
            alt="Trado Logo"
            className="img-fluid"
            style={{ maxWidth: "150px" }}
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center text-lg-start">
            <li className="nav-item mx-2 my-1 my-lg-0">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
            <li className="nav-item mx-2 my-1 my-lg-0">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item mx-2 my-1 my-lg-0">
              <Link className="nav-link" to="/product">Product</Link>
            </li>
            <li className="nav-item mx-2 my-1 my-lg-0">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item mx-2 my-1 my-lg-0">
              <Link className="nav-link" to="/support">Support</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
