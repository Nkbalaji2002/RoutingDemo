import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const PortfolioApp = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index Component={Home} />
        <Route path="about" Component={About} />
        <Route path="portfolio" Component={Portfolio} />
        <Route path="contact" Component={Contact} />
      </Routes>
      <Footer />
    </>
  );
};

export default PortfolioApp;
