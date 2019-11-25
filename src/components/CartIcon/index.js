//Library Imports
import React from "react";
import { connect } from "react-redux";

//Redux imports
import { toggleCartHidden } from "../../store/modules/cart/actions";
import { selectCartItemsCount } from "../../store/modules/cart/selectors";

//Styles Imports
import "./styles.scss";

//Icon Imports
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ onToggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={onToggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"> {itemCount} </span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    itemCount: selectCartItemsCount(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleCartHidden: () => dispatch(toggleCartHidden())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
