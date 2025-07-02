import React from "react";

export default function Education() {
  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-6 ">
            <img
              src="/Media/education.svg"
              alt=""
              className="w-100"
              style={{ margin: "0 auto" }}
            />
          </div>
          <div className="col-6 p-5">
            <h1 className="fs-1 mb-4">Free and open market education</h1>
            <p className="mb-4">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="https://zerodha.com/varsity/" >
              Varsity <i class="fa-solid fa-arrow-right"></i>
            </a>
            <p className="mb-4 mt-4">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p >
            <a href="https://tradingqna.com/" >
              TradingQ&A <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
