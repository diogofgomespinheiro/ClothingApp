//Library Imports
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//Style Imports
import "./styles.scss";

// Components Imports
import MenuItem from "../../../../components/MenuItem";

//Redux imports
import { selectDirectorySections } from "../../../../store/modules/directory/selectors";

const Directory = ( { sections }) => {
    return (
      <div className="directory-menu">
        {sections.map(({id, ...otherSectionProps}) => (
          <MenuItem  key={id} {...otherSectionProps} />
        ))}
      </div>
    );
}

const mapStateToProps = createStructuredSelector({ 
  sections: selectDirectorySections
});


export default connect(mapStateToProps)(Directory);
