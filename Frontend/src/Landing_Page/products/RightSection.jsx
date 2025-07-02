import React from "react";

export default function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <>
      <div className="container mb-5 p-5">
        <div className="row mt-2">
          <div className="col-5 p-5">
            <h1>{productName}</h1>
            <br />
            <br />
            <p>{productDescription}</p>
            <div>
              <a href={learnMore}>
                Learn more <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
            <div className="col-1"></div>
            <div className="col-6 pe-5">
              <img src={imageURL} alt="Product image" />
            </div>
          </div>
        </div>
    </>
  );
}
