import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CartBtn() {
  const state = useSelector((state) => state.addItem);

  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-primary ms-2">
        <i className="fa-solid fa-cart-shopping me-1"></i> Cart ({state.length})
      </NavLink>
    </>
  );
}
