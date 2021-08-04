import { Productactions } from "../constants/Action-type";

const initialstate = {
  products: [],
  cart: [],
};
export const ProductsReducer = (state = initialstate, { type, payload }) => {
  if (type === Productactions.ALL_PRODUCTS) {
    return { ...state, products: payload };
  }
  return state;
};
export const SingleProductReducer = (state = [], { type, payload }) => {
  if (type === Productactions.SINGLE_PRODUCT) {
    return { ...state, ...payload };
  }
  if (type === Productactions.REMOVE_SINGLEPRODUCT) {
    return {};
  }
  return state;
};
export const CartReducer = (state = initialstate, { type, payload }) => {
  if (type === Productactions.ADD_TO_CART) {
    return {
      ...state,
      cart: [...state.cart, { ...payload, incart: true, quantity: 1 }],
    };
  }
  return state;
};
