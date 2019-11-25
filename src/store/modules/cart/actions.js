import cartActionTypes from "./types";

export const toggleCartHidden = () => {
  return {
    type: cartActionTypes.TOOGLE_CART_HIDDEN,
  }
}

export const addItem = (item) => {
  return {
    type: cartActionTypes.ADD_ITEM,
    payload: item
  }
}