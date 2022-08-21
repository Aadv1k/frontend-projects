import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import CTA from "./CTA";
import Testemonials from "./Testemonials";
import Footer from "./Footer";

export default function () {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Testemonials />
      <Footer />
    </React.Fragment>
  );
}

