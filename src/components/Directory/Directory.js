import React, { Component } from "react";

// Components Imports
import MenuItem from "../MenuItem/MenuItem";

//Style Imports
import "./Directory.scss";

//Dummy Data
import SECTION_DATA from "../../dummy-data/sections.data";

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
