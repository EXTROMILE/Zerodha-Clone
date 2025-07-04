import React from "react";

export default function Awards() {
  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-6 text-center p-5">
            <img src="/Media/largestBroker.svg" alt="Broker image" />
          </div>
          <div className="col-6 p-5 ">
            <h1 className="fs-1">Largest stock broker in India</h1>
            <p>
              2+ million Zerodha clients contribute to over 15% of all retail
              order volumes in India daily by trading and investing in:
            </p>
            <div className="row mt-5 mb-3">
              <div className="col-6 ">
                <ul>
                  <li>Futures and Options</li>
                  <li>Commodity derivatives</li>
                  <li>Currency derivatives</li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>Stocks & IPOs</li>
                  <li>Direct mutual funds</li>
                  <li>Bonds and Govt. Securities</li>
                </ul>
              </div>
            </div>
            <img
              src="/Media/pressLogos.png"
              alt="Press image"
              style={{ width: "90%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
