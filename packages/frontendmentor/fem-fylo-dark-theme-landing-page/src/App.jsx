import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Testemonials from "./components/Testemonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Testemonials />
      <Footer />
    </>
  );
}
