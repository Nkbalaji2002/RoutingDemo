import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import OrderSummary from "./Pages/OrderSummary";
import ProductList from "./Pages/ProductList";
import Featured from "./Pages/Featured";
import NewProducts from "./Pages/NewProducts";

const RoutingTutoApp = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="px-3">
          <Routes>
            <Route index Component={Home} />
            <Route path="about" Component={About} />
            <Route path="contact" Component={Contact} />
            <Route path="products" Component={ProductList}>
              <Route path="featured" Component={Featured} />
              <Route path="new" Component={NewProducts} />
            </Route>
            <Route path="order-summary" Component={OrderSummary} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default RoutingTutoApp;
