import React from "react";

export default function Pricing() {
  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-6 p-5">
            <h1 className="fs-2 mb-4">Unbeatable pricing</h1>
            <p>
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="http://localhost:5173/pricing">
              See Pricing <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="col-6 p-5">
            <div className="row">
              <div className="col-4">
                <img
                  src="/Media/pricing0.svg"
                  alt=""
                  className="w-100"
                  style={{ margin: "0 auto" }}
                />
                <p className="text-center text-muted">Free account opening</p>
              </div>
              <div className="col-4">
                <img
                  src="/Media/pricing0.svg"
                  alt=""
                  className="w-100"
                  style={{ margin: "0 auto" }}
                />
                <p className="text-center text-muted">Free equity delivery and direct mutual funds</p>
              </div>
              <div className="col-4">
                <img
                  src="/Media/intradayTrades.svg"
                  alt=""
                  className="w-100"
                  style={{ margin: "0 auto" }}
                />
                <p className="text-center text-muted">Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
