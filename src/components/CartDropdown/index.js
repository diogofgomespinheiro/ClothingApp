//Library imports
import React from "react";

//Components Imports
import CustomButton from "../CustomButton";

//Styles imports
import "./styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

export default CartDropdown;