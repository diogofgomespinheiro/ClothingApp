//Library Imports
import React from 'react';
import { Route } from "react-router-dom";

//Components imports
import CollectionsOverview from "../../components/CollectionsOverview";
import Collection from "../Collection";

const Shop = ( { match } ) => {
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </div>
    );
}

export default Shop;
