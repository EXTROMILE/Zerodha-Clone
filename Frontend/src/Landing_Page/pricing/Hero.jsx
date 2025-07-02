import React from "react";

export default function Hero() {
  return (
    <>
      <div className="container p-5 mt-5">
        <div className="row text-center">
          <h1 className="fs-1 mb-4">Charges</h1>
          <p className="fs-5 text-muted mb-5">List of all charges and taxes</p>
          <div className="col-4 p-3 mt-5 ps-5">
            <img src="/Media/pricing0.svg" alt="" style={{ width: "80%" }} />
            <h1 className="fs-2 mb-4 mt-5">Free equity delivery</h1>
            <p className="text-muted">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 p-3 mt-5 ps-5">
            <img
              src="/Media/intradayTrades.svg"
              alt=""
              style={{ width: "80%" }}
            />
            <h1 className="fs-2 mb-4 mt-5 ps-5">Intraday and F&O trades</h1>
            <p className="ps-3 text-muted">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="/Media/pricing0.svg" alt="" style={{ width: "80%" }} />
            <h1 className="fs-2 mb-4 mt-5">Free direct MF</h1>
            <p className="text-muted">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
