import React from "react";

export default function Universe() {
  return (
    <>
      <div className="container p-5">
        <div className="row  p-2 text-muted text-center">
          <h1 className="fs-1 mb-5 text-center">The Zerodha Universe</h1>
          <p className="fs-5 mb-5 text-center">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
          <div></div>
          <div className="col-3 p-3 text-center ms-5">
            <img
              src="/Media/zerodhaFundhouse.png"
              alt=""
              style={{ width: "90%" }}
              className="mb-3"
            />
            <p className="mb-5">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
            <img
              src="/Media/streakLogo.png"
              alt=""
              style={{ width: "90%" }}
              className="mb-3"
            />
            <p>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-3 p-3 text-center ms-5">
            <img
              src="/Media/sensibullLogo.svg"
              alt=""
              style={{ width: "90%" }}
              className="mb-3"
            />
            <p className="mb-5">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
            <img
              src="/Media/smallcaseLogo.png"
              alt=""
              style={{ width: "90%" }}
              className="mb-3"
            />
            <p>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-3 p-3 text-center ms-5">
            <img
              src="/Media/tijori.svg"
              alt=""
              style={{ width: "90%" }}
              className="mb-3"
            />
            <p className="mb-5">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
            <img
              src="/Media/dittoLogo.png"
              alt=""
              style={{ width: "90%" }}
              className="mb-3"
            />
            <p>
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free
            </p>
          </div>
          <div className="mt-4">
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
