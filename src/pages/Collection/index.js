//Library imports
import React from "react";
import { connect } from "react-redux";

//Style imports
import "./styles.scss";

//Components imports
import CollectionItem from "../../components/CollectionItem";
import WithSpinner from "../../hoc/WithSpinner";

//Redux imports
import { selectCollection } from "../../store/modules/shop/selectors";

const Collection = ( { collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{ title }</h2>
      <div className="items">
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  }
}

export default connect(mapStateToProps)(WithSpinner(Collection));