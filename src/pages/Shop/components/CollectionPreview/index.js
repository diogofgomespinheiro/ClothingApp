//Library imports
import React from 'react';
import { withRouter } from "react-router-dom";

//Component imports
import CollectionItem from "../../../../components/CollectionItem";

//Style imports
import "./styles.scss";

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  console.log(routeName);
  return (
    <div className="collection-preview">
      <h1 className="title" onClick={() => history.push(`${match.url}/${routeName}`)}>{title.toUpperCase()}</h1>
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

export default withRouter(CollectionPreview);
