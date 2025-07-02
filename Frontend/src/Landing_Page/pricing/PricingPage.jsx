import React from "react";

import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";

import Navbar from "../Navbar";
import Footer from "../Footer";

export default function PricingPage() {
  return (
    <>
      <div>
        <Hero />
        <Brokerage />
        <OpenAccount />
      </div>
    </>
  );
}
