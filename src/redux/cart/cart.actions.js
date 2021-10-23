import { cartActionReducer } from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartActionReducer.TOGGLE_CART_HIDDEN,
});

export const addItems = (item) => ({
  type: cartActionReducer.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: cartActionReducer.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionReducer.REMOVE_ITEM,
  payload: item,
});
