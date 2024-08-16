import React from "react";
import { useSelector } from "react-redux";
import { Items } from "../Components/Items/Items";
import "./Cart.css";

const Cart = () => {
  const getCartProducts = useSelector((state) => state.cartProducts);
  const totalPrice = useSelector((state) => state.totalPriceInCart);
  return (
    <div>
      <h1 className="main-heading">Cart</h1>
      <h3 className="total-price">Total Price: {totalPrice} $</h3>
      <div className="product-list">
        {getCartProducts.map((product, index) => (
          <Items key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
