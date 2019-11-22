//Library imports
import React from 'react';

//Style imports
import "./styles.scss";

const CustomButton = ( { children, ...otherProps } ) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton;
