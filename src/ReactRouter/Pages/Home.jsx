import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home Page</h1>
      <button
        className="btn btn-primary"
        onClick={() => navigate("order-summary")}
      >
        Place Order
      </button>
    </>
  );
};

export default Home;
