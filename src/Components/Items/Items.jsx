import React from "react";
import "./Items.css";
import { FaCartPlus } from "react-icons/fa";

export const Items = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="price">
          <div className="item-price-new">${props.new_price}</div>
          <div className="item-price-old">${props.old_price}</div>
        </div>
        <button className="cart">
          <FaCartPlus />
        </button>
      </div>
    </div>
  );
};
