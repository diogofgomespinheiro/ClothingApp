import { combineReducers } from "redux";

import userReducer from "./modules/user/reducer";
import cartReducer from "./modules/cart/reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});