import React from "react";

export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <>
      <div className="container mt-5">
        <div className="row ps-5 mt-2">
          <div className="col-6 p-5">
            <img src={imageURL} alt="Product image" />
          </div>
          <div className="col-1"></div>
          <div className="col-5 p-5"> 
            <h1>{productName}</h1>
            <br /><br />
            <p>{productDescription}</p>
            <div className="pb-5 pt-3">
              <a href={tryDemo} className="me-5">
                Try demo <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a href={learnMore}>
                Learn more <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div >
              <a href={googlePlay} className="me-5">
                <img src="Media/googlePlayBadge.svg" alt="Google Play" />
              </a>
              <a href={appStore}>
                <img src="Media/appstoreBadge.svg" alt="App Store" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
