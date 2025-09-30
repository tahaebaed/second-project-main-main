import { gsap } from "gsap";
import React, { useEffect } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./App.css";

import { ThemeProvider } from "./contexts/ThemeProvider";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer";

import { Outlet } from "react-router-dom";

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
    <ThemeProvider>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
