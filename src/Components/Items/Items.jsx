import React from "react";
import "./Items.css";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  addToCartAction,
  decreaseProductInCartAction,
  IncreaseProductInCartAction,
  removeFromCartAction,
} from "../../redux/redux";
import { useLocation } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export const Items = ({ product }) => {
  const { pathname } = useLocation();
  const isInCart = pathname.includes("cart");

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addToCartAction(product));
  };
  const removeFromCart = () => {
    dispatch(removeFromCartAction(product));
  };
  const increaseProductCart = () => {
    dispatch(IncreaseProductInCartAction(product));
  };
  const decreaseProductInCart = () => {
    dispatch(decreaseProductInCartAction(product));
  };
  return (
    <div className="item">
      {isInCart && (
        <button className="delete-btn" onClick={removeFromCart}>
          <BsCartPlus />
        </button>
      )}
      <img src={product.image} alt="" />
      <p>{product.name}</p>
      {isInCart && <div className="count">Count: ({product.quantity})</div>}
      <div className="item-prices">
        <div className="price">
          <div className="item-price-old">${product.old_price}</div>
          <div className="item-price-new">${product.new_price}</div>
        </div>
        {isInCart ? (
          <div>
            <button className="increase-btn" onClick={increaseProductCart}>
              <AiOutlinePlus />
            </button>
            <button
              className="decrease-btn"
              onClick={decreaseProductInCart}
              disabled={product.quantity <= 1}
            >
              <AiOutlineMinus />
            </button>
          </div>
        ) : (
          <div>
            <button className="add-btn" onClick={addToCart}>
              <FaCartPlus />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
