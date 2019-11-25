//Library imports
import React from "react";
import { connect } from "react-redux";

//Style imports
import "./styles.scss";

//Redux Imports
import { clearItemFromCart, addItem ,removeItem } from "../../../../store/modules/cart/actions";

const CheckoutItem = ( { cartItem, onClearItemFromCart, onAddItem, onRemoveItem } ) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"/>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => onRemoveItem(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => onAddItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{price}€</span>
      <div className="remove-button" onClick={() => onClearItemFromCart(cartItem)}>
        &#10005;
      </div>
    </div>
  );
}

const mapDisptachToProps = dispatch => {
  return {
    onClearItemFromCart: item => dispatch(clearItemFromCart(item)),
    onAddItem: item => dispatch(addItem(item)),
    onRemoveItem: item => dispatch(removeItem(item))
  }
}

export default connect(null, mapDisptachToProps)(CheckoutItem);