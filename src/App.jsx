import { gsap } from "gsap";
import React, { useEffect } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./App.css";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });
  }, []);

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Header />
      <Home />
      <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
