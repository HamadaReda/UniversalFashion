import "./NewCollections.css";
import React from "react";
import { Items } from "./../Items/Items";
import { useSelector } from "react-redux";

export const NewCollections = () => {
  const new_collections_products = useSelector(
    (state) => state.newCollectionsProducts
  );
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collections_products.map((item, i) => {
          return <Items key={i} product={item} />;
        })}
      </div>
    </div>
  );
};
