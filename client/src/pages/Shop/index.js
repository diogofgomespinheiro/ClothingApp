//Library Imports
import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

//Components imports
import Spinner from "../../components/Spinner";

//Redux imports
import { fetchCollectionsStart } from "../../store/modules/shop/actions";
import { selectIsCollectionFetching } from "../../store/modules/shop/selectors";

const CollectionsOverview = lazy(() =>
  import("../../components/CollectionsOverview")
);
const Collection = lazy(() => import("../Collection"));

const Shop = ({ match, isFetching, onFetchCollectionStart }) => {
  useEffect(() => {
    onFetchCollectionStart();
  }, [onFetchCollectionStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
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
