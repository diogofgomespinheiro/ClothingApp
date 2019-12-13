//Library Imports
import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

//Components imports
import CollectionsOverview from "../../components/CollectionsOverview";
import Collection from "../Collection";

//Redux imports
import { fetchCollectionsStart } from "../../store/modules/shop/actions";
import { selectIsCollectionFetching } from "../../store/modules/shop/selectors";

const Shop = ({ match, isFetching, onFetchCollectionStart }) => {
  useEffect(() => {
    onFetchCollectionStart();
  }, [onFetchCollectionStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionsOverview isLoading={isFetching} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => <Collection isLoading={isFetching} {...props} />}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => {
  return {
    onFetchCollectionStart: () => dispatch(fetchCollectionsStart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
