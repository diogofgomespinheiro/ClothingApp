//Library imports
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//Style imports
import "./styles.scss";

//Components imports
import CollectionPreview from "../../pages/Shop/components/CollectionPreview"
import WithSpinner from "../../hoc/WithSpinner";

//Redux Imports
import { selectCollectionsForPreview } from "../../store/modules/shop/selectors";

const CollectionsOverview = ( { collections } ) => {
  return (
    <div className="collections-overview">
      {
          collections
            .map(({id, ...otherCollectionProps}) => 
            <CollectionPreview key={id} {...otherCollectionProps} />
            )
        }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({ 
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(WithSpinner(CollectionsOverview));