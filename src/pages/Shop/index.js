//Library Imports
import React, { Component } from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

//Components imports
import CollectionsOverview from "../../components/CollectionsOverview";
import Collection from "../Collection";


//Redux imports
import { fetchCollections } from "../../store/modules/shop/actions";
import { selectIsCollectionFetching } from "../../store/modules/shop/selectors";

class Shop extends Component {

  componentDidMount() {
    const { onFetchCollection } = this.props;
    onFetchCollection();
  }

  render() {
    const { match, isFetching } = this.props;

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
          render={props => (
            <Collection isLoading={isFetching} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsCollectionFetching
})

const mapDispatchToProps = dispatch => {
  return {
    onFetchCollection: () => dispatch(fetchCollections())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
