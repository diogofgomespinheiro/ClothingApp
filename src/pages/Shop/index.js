//Library Imports
import React, { Component } from 'react';

//Components imports
import CollectionPrewview from "../../components/CollectionPreview";

//Dummy Data
import SHOP_DATA from "../../dummy-data/shop.data";

class Shop extends Component {
  state = {
    collections: SHOP_DATA,
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {
          collections.filter((item, index) => index < 4).map(({id, ...otherCollectionProps}) => (
            <CollectionPrewview key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    )
  }
}

export default Shop;
