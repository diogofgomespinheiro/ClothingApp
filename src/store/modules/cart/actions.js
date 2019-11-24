import cartActionTypes from "./types";

export const toggleCartHidden = () => {
  return {
    type: cartActionTypes.TOOGLE_CART_HIDDEN,
  }
}