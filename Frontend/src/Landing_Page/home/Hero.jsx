import React from "react";

export default function Hero() {

  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col text-center">
            <div className="mb-5">
              <img
                src="/Media/homeHero.png"
                alt="Hero Image"
                className="w-100"
                style={{ margin: "0 auto" }}
              />
            </div>
            <div className="mt-5 mb-4">
              <h1 className="mb-3">Invest in everything</h1>
              <p>
                Online platform to invest in stocks, derivatives, mutual funds,
                ETFs, bonds, and more.
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
