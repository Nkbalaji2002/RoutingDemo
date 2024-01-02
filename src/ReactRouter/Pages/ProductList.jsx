import React from "react";
import { Link, Outlet } from "react-router-dom";

const ProductList = () => {
  return (
    <>
      <h2>Product List</h2>
      <nav className="mb-3 bg-secondary w-100 p-4 text-light">
        <Link className="me-3 list-group-item-action" to="featured">
          Featured
        </Link>
        <Link className="me-3 list-group-item-action" to="new">
          New
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default ProductList;
