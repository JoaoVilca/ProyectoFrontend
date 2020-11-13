import React from "react";
import "./../../../css/header2.css";
import { FaShoppingCart } from "react-icons/fa";

const Header2 = () => {
  return (
    <header className="header2">
      <div className="nombre">
        <figure className="logo"></figure>
        <h1>Arte</h1>
      </div>
      <div >
        <div className="iconoCarrito"></div>
      </div>
    </header>
  );
};

export default Header2;
