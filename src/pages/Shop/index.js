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
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { onUpdateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      onUpdateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverview isLoading={this.state.loading} {...props} />}/>
        <Route path={`${match.path}/:collectionId`} render={(props) => <Collection isLoading={this.state.loading} {...props} />} />
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
