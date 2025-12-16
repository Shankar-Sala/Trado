import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5 pt-5">

        {/* Top Footer */}
        <div className="row text-muted">

          <div className="col-12 col-md-3 mb-4">
            <img
              src="media/images/logo2.png"
              alt="Trado logo"
              className="img-fluid mb-3"
              style={{ maxWidth: "160px" }}
            />
            <p style={{ fontSize: "14px" }}>
              © 2010 - 2025, Not Trado Broking Ltd.
              <br />
              All rights reserved.
            </p>
          </div>

          <div className="col-6 col-md-3 mb-4">
            <p className="fw-semibold">Company</p>
            <Link to="/about" className="d-block text-decoration-none">About</Link>
            <Link to="/products" className="d-block text-decoration-none">Products</Link>
            <Link to="/pricing" className="d-block text-decoration-none">Pricing</Link>
            <Link to="/referral" className="d-block text-decoration-none">Referral programme</Link>
            <Link to="/careers" className="d-block text-decoration-none">Careers</Link>
            <Link to="/press" className="d-block text-decoration-none">Press & media</Link>
            <Link to="/csr" className="d-block text-decoration-none">Trado cares (CSR)</Link>
          </div>

          <div className="col-6 col-md-3 mb-4">
            <p className="fw-semibold">Support</p>
            <Link to="/contact" className="d-block text-decoration-none">Contact</Link>
            <Link to="/support" className="d-block text-decoration-none">Support portal</Link>
            <Link to="/blog" className="d-block text-decoration-none">Z-Connect blog</Link>
            <Link to="/charges" className="d-block text-decoration-none">List of charges</Link>
            <Link to="/downloads" className="d-block text-decoration-none">Downloads & resources</Link>
          </div>

          <div className="col-6 col-md-3 mb-4">
            <p className="fw-semibold">Account</p>
            <Link to="/signup" className="d-block text-decoration-none">Open an account</Link>
            <Link to="/fund-transfer" className="d-block text-decoration-none">Fund transfer</Link>
            <Link to="/challenge" className="d-block text-decoration-none">60 day challenge</Link>
          </div>

        </div>

        {/* FULL Legal Text - NOT REMOVED */}
        <div
          className="mt-4 text-muted"
          style={{ fontSize: "13px", lineHeight: "1.6" }}
        >
          <p>
            Trado Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Trado Securities Pvt.
            Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Trado Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Trado Broking Ltd., #153/154,
            4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar
            4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints
            pertaining to securities broking please write to
            complaints@trado.com, for DP related to dp@trado.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Trado and offering such services, please
            create a ticket here.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
