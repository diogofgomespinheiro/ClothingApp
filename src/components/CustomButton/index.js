//Library imports
import React from 'react';

//Style imports
import "./styles.scss";

const CustomButton = ( { children, isGoogleSignIn, ...otherProps } ) => {
  return (
    <button className={`${isGoogleSignIn ? "google-sign-in " : ""}custom-button`} {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton;
