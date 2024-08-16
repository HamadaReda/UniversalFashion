import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [barButton, setBarButton] = useState(false);
  const toggleHeader = () => {
    setBarButton(!barButton);
  };
  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setBarButton(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cartLength = useSelector((state) => state.cartProducts.length);
  return (
    <div className={`navbar ${barButton ? "active" : ""}`}>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <div className={`main-items ${barButton ? "active" : ""}`}>
        <ul className={`nav-menu ${barButton ? "active" : ""}`}>
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link to="/">Shop</Link>
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("men");
            }}
          >
            <Link to="/men">Men</Link>
            {menu === "men" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("women");
            }}
          >
            <Link to="/women">Women</Link>
            {menu === "women" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("kids");
            }}
          >
            <Link to="/kids">Kids</Link>
            {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <button>Login</button>
          <Link to="/cart">
            <div className="image">
              <img src={cart_icon} alt="" />
              <span>{cartLength}</span>
            </div>
          </Link>
        </div>
      </div>
      <button className="toggle-btn" onClick={toggleHeader}>
        <img src={require("./../Assets/bar_button.png")} alt="" />
      </button>
    </div>
  );
};
