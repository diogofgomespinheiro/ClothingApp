//Library imports
import React from 'react';

//Component imports
import CollectionItem from "../../../../components/CollectionItem";

//Style imports
import "./styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {
          items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default CollectionPreview;
