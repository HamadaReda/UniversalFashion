import all_products from "./../Components/Assets/all_products";
import popular_products from "./../Components/Assets/popular_products";
import new_collections_products from "./../Components/Assets/new_collections_products";
import { createStore } from "redux";

// Initial State
const initialSatate = {
  allProducts: all_products,
  popularProducts: popular_products,
  newCollectionsProducts: new_collections_products,
  cartProducts: [],
  totalPriceInCart: 0,
};

// Actions Creators
export const addToCartAction = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const removeFromCartAction = (product) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: product,
  };
};

export const IncreaseProductInCartAction = (product) => {
  return {
    type: "INCREASE_PRODUCT",
    payload: product,
  };
};

export const decreaseProductInCartAction = (product) => {
  return {
    type: "DECREASE_PRODUCT",
    payload: product,
  };
};

// Reducer
const ecommerceReducer = (state = initialSatate, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART": {
      const productIndex = state.cartProducts.findIndex(
        (product) => product.id === payload.id
      );
      let newCartProducts;
      if (productIndex <= -1) {
        newCartProducts = [...state.cartProducts, { ...payload, quantity: 1 }];
      } else {
        newCartProducts = state.cartProducts.map((product, index) => {
          if (index === productIndex) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        });
      }
      return {
        ...state,
        cartProducts: newCartProducts,
        totalPriceInCart: state.totalPriceInCart + payload.new_price,
      };
    }
    case "REMOVE_FROM_CART": {
      let newCartProducts = state.cartProducts.filter(
        (product) => product.id !== payload.id
      );
      let newTotalPriceInCart = newCartProducts.reduce(
        (new_price, product) =>
          new_price + product.new_price * product.quantity,
        0
      );
      return {
        ...state,
        cartProducts: newCartProducts,
        totalPriceInCart: newTotalPriceInCart,
      };
    }
    case "INCREASE_PRODUCT": {
      let newTotalPriceInCart = 0;
      let newCartProducts = state.cartProducts.map((product) => {
        if (product.id === payload.id) {
          let updatedProduct = { ...product, quantity: product.quantity + 1 };
          newTotalPriceInCart +=
            updatedProduct.new_price * updatedProduct.quantity;
          return updatedProduct;
        } else {
          newTotalPriceInCart += product.new_price * product.quantity;
          return product;
        }
      });
      return {
        ...state,
        cartProducts: newCartProducts,
        totalPriceInCart: newTotalPriceInCart,
      };
    }
    case "DECREASE_PRODUCT": {
      if (payload.quantity > 1) {
        let newTotalPriceInCart = 0;
        let newCartProducts = state.cartProducts.map((product) => {
          if (product.id === payload.id) {
            let updatedProduct = { ...product, quantity: product.quantity - 1 };
            newTotalPriceInCart +=
              updatedProduct.new_price * updatedProduct.quantity;
            return updatedProduct;
          } else {
            newTotalPriceInCart += product.new_price * product.quantity;
            return product;
          }
        });
        return {
          ...state,
          cartProducts: newCartProducts,
          totalPriceInCart: newTotalPriceInCart,
        };
      } else {
        return state;
      }
    }
    default:
      return state;
  }
};

// Store
export const store = createStore(ecommerceReducer);
