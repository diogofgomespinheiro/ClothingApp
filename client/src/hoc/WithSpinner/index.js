//Library imports
import React from "react";

//Style imports
import { SpinnerContainer, SpinnerOverlay } from "./styles";

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps}) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  )
  : (
    <WrappedComponent {...otherProps} />
  )
}

export default WithSpinner;