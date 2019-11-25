//Library imports
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//Components Imports
import CustomButton from "../CustomButton";
import CartItem from "../CartItem";

//Styles imports
import "./styles.scss";

//Redux imports
import { selectCartItems } from "../../store/modules/cart/selectors";

const CartDropdown = ( { cartItems } ) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);