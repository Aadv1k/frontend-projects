import { Component } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";

export default class extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero />
        <Info />
        <Features />
        <Footer />
      </>
    );
  }
}
