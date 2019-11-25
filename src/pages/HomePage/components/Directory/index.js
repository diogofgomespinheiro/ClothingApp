//Library Imports
import React, { Component } from "react";

//Style Imports
import "./styles.scss";

// Components Imports
import MenuItem from "../../../../components/MenuItem";

//Dummy Data
import SECTION_DATA from "../../../../utils/dummy-data/sections.data";

class Directory extends Component {
  state = {
    sections: SECTION_DATA
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({id, ...otherSectionProps}) => (
          <MenuItem  key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
