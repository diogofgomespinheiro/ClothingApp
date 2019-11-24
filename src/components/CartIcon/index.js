//Library Imports
import React from "react";
import { connect } from "react-redux";

//Redux imports
import { toggleCartHidden } from "../../store/modules/cart/actions";

//Styles Imports
import "./styles.scss";

//Icon Imports
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

const CartIcon = ({ onToggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={onToggleCartHidden}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count"> 0 </span>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onToggleCartHidden: () => dispatch(toggleCartHidden()),
  }
}

export default connect(null, mapDispatchToProps)(CartIcon);

