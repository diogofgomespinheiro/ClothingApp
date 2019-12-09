//Library imports
import React from 'react';

//Style imports
import { CustomButtonContainer } from "./styles";

const CustomButton = ( { children, ...props } ) => {
  return (
    <CustomButtonContainer {...props}>
      {children}
    </CustomButtonContainer>
  )
}

export default CustomButton;
