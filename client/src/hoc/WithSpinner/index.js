//Library imports
import React from "react";

//Component imports
import Spinner from "../../components/Spinner";

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps}) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />
}

export default WithSpinner;