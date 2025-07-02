import React from "react";

export default function Brokerage() {
  return (
    <>
      <div className="container p-5 ">
        <div className="row mb-5">
          <h1 className="fs-5 mb-5 text-center p-5">
            <a href="">Calculate your costs upfront</a> using our brokerage
            calculator
          </h1>
          <br />
          <h1 className="fs-5 ps-5">Charges for account opening</h1>
          <div className="col-8 mt-5 ps-5">
            <h2 className="fs-5 mb-3 ps-5">Type of account</h2>
            <ul className="ps-5">
              <li className="mb-3">Online account</li>
              <li className="mb-3">Offline account</li>
              <li className="mb-3">NRI account (offline only)</li>
              <li className="mb-3">
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </li>
            </ul>
          </div>
          <div className="col-4 mt-5 ps-5">
            <h2 className="fs-5 mb-3 ps-5"> Charges</h2>
            <ul className="ps-5">
              <li className="mb-3">FREE</li>
              <li className="mb-3">FREE</li>
              <li className="mb-3">&#8377; 500</li>
              <li className="mb-3">&#8377; 500</li>
            </ul>
          </div>
        </div>
        <h5 className="text-muted fs-5 mb-4">Disclaimer</h5>
        <p className="text-muted fs-6">
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
    </>
  );
}
