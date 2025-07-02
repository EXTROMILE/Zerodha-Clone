import React from "react";

export default function Team() {
  return (
    <>
      <div className="container pb-5">
        <div className="row ps-5">
          <div className="col-5 ps-5 text-center ">
            <img
              src="/Media/nithinKamath.jpg"
              alt="Nithin Kamath"
              style={{borderRadius: "100%", width:"60%"}}
              className="mb-3"
            />
            <h4>Nithin Kamath</h4>
            <p>Founder, CEO</p>
          </div>
          <div className="col-7 ps-5 pb-5">
            <h1 className="fs-2 mb-5 pb-5">People</h1>
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
          </div>
        </div>
      </div>
    </>
  );
}
