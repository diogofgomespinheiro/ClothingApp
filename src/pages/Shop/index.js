//Library Imports
import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

//Components imports
import CollectionsOverview from "../../components/CollectionsOverview";
import Collection from "../Collection";

//Services imports
import { firestore, convertCollectionsSnapshotToMap } from "../../services/firebase/firebase";

//Redux imports
import { updateCollections } from "../../store/modules/shop/actions";


class Shop extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { onUpdateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      onUpdateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
  }
}

export default connect(null, mapDispatchToProps)(Shop);
