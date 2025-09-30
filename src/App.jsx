import { gsap } from "gsap";
import React, { useEffect } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./App.css";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import About from "./Pages/About";
import { ThemeProvider } from "./contexts/ThemeProvider";
import ServicesPage from "./Pages/ServicesPage";
import Contact from "./Pages/Contact";
import ProjectsSection from "./Pages/ProjectsSection";


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
          {/* <ProjectsSection/> */}
          <Header /> 
           {/* <Contact />  */}
             <ServicesPage />   
          {/* <Home /> */}
     {/* <About />   */}
          <Footer />

        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
