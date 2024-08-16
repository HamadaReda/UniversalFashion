import "./Popular.css";
import React from "react";
import { Items } from "./../Items/Items";
import { useSelector } from "react-redux";

export const Popular = () => {
  const popular_products = useSelector((state) => state.popularProducts);
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-items">
        {popular_products.map((item, i) => {
          return <Items key={i} product={item} />;
        })}
      </div>
    </div>
  );
};
