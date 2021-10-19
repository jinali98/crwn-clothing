import { cartActionReducer } from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartActionReducer.TOGGLE_CART_HIDDEN,
});
