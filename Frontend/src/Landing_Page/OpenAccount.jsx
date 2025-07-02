import React from "react";

export default function OpenAccount() {
  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col text-center">
            <div className="mt-5 mb-4">
              <h1 className="mb-3">Open a Zerodha account</h1>
              <p>
                Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
                and F&O trades.
              </p>
            </div>
            <button
              className="btn btn-primary fs-5 p-2"
              style={{ width: "20%" }}
            >
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
