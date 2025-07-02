import React from "react";

export default function Hero() {
  return (
    <>
      <section className="container-fluid mb-5" id="supportHero">
        <div className="p-5" id="supportWrapper">
          <h5>Support Portal</h5>
          <a href="" style={{ textDecoration: "underline", color: "white" }}>
            Track tickets
          </a>
        </div>
        <div className="row ps-5">
          <div className="col-7">
            <h1 className="fs-4 mb-5">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <form action="">
              <input
                type="text"
                className="form-control mb-3 p-4"
                style={{ width: "100%", height: "60px" }}
                placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
              />
            </form>
            <a
              href=""
              style={{ textDecoration: "underline", color: "white" }}
              className="pe-4"
            >
              Track account opening
            </a>
            <a
              href=""
              style={{ textDecoration: "underline", color: "white" }}
              className="pe-4"
            >
              {" "}
              Track segment activation
            </a>
            <a href="" style={{ textDecoration: "underline", color: "white" }}>
              {" "}
              Intraday margins
            </a>
            <br />
            <a href="" style={{ textDecoration: "underline", color: "white" }}>
              Kite user manual
            </a>
          </div>
          <div className="col-5 p-5 mb-5">
            <h5 className="mb-3">Featured</h5>
            <ol>
              <li className="mb-3">
                <a
                  href=""
                  style={{ textDecoration: "underline", color: "white" }}
                >
                  Surveillance measure on scrips - June 2025
                </a>
              </li>
              <li className="mb-3">
                <a
                  href=""
                  style={{ textDecoration: "underline", color: "white" }}
                >
                  Rights Entitlements listing in June 2025
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
