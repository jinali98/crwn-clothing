import { cartActionReducer } from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartActionReducer.TOGGLE_CART_HIDDEN,
});

export const addItems = (item) => ({
  type: cartActionReducer.ADD_ITEM,
  payload: item,
});
