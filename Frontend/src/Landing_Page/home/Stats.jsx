import React from "react";

export default function Stats() {
  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-6 p-5">
            <h1 className="mb-4 fs-1">Trust with confidence</h1>
            <div className="mb-4">
              <h2 className="fs-3">Customer-first always</h2>
              <p className="text-muted"> 
                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
                crores of equity investments and contribute to 15% of daily
                retail exchange volumes in India.
              </p>
            </div>
            <div className="mb-4">
              <h2 className="fs-3">No spam or gimmicks</h2>
              <p className="text-muted">
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like.
              </p>
            </div>
            <div className="mb-4">
              <h2 className="fs-3">The Zerodha universe</h2>
              <p className="text-muted">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </div>
            <div className="mb-4">
              <h2 className="fs-3">Do better with money</h2>
              <p className="text-muted">
                With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with
                your money.
              </p>
            </div>
          </div>
          <div className="col-6 p-3">
            <a href="http://localhost:5173/products">
            <img
              src="/Media/ecosystem.png"
              alt=""
              className="w-100 mb-5"
              style={{ margin: "0 auto" }}
            />
            </a>
            <div className="text-center">
              <a href="http://localhost:5173/products" className="me-5">Explore our products <i class="fa-solid fa-arrow-right"></i></a>
              <a href="http://localhost:5174/">Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
