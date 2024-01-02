import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "./App.css";
import PortfolioApp from "./Portfolio/MainApp";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <PortfolioApp />
      </BrowserRouter>
    </>
  );
};

export default App;
