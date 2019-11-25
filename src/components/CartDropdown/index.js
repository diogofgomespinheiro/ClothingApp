//Library imports
import React from "react";
import { connect } from "react-redux";

//Components Imports
import CustomButton from "../CustomButton";
import CartItem from "../CartItem";

//Styles imports
import "./styles.scss";

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

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems
  }
}

export default connect(mapStateToProps)(CartDropdown);