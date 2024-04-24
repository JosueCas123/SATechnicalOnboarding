/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React, { useRef } from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Josue Castillo Mollo",
  title: "Desarrollador FRONT-END ",
  email: "Josue.CastilloMollo@studentambassadors.com",
  gitHub: "JosueCas123",
  instagram: "microsoft",
  linkedIn: "josue-castillo-dev",
  medium: "",
  
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  console.log("App props", footerRef);
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} scrollToFooter={scrollToFooter} />
      <About />
      <Portfolio />

      <Footer ref={footerRef} {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;