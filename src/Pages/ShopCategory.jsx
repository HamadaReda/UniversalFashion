import "./ShopCategory.css";

import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import { Items } from "../Components/Items/Items";
import { useSelector } from "react-redux";

const ShopCategory = (props) => {
  const all_products = useSelector((state) => state.allProducts);
  let target = all_products.filter((item) => item.category === props.category);
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {target.map((item, i) => {
          return <Items key={i} product={item} />;
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
