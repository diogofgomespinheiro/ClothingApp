//Library imports
import React from "react";
import { connect } from "react-redux";

//Components imports
import CustomButton from "../CustomButton";

//Redux imports
import { addItem } from "../../store/modules/cart/actions";

//Style imports
import "./styles.scss";

const CollectionItem = ({ item, onAddItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}€</span>
      </div>
      <CustomButton inverted onClick={() => onAddItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: item => dispatch(addItem(item))
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
