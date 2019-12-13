//Library Imports
import React from 'react';

//Style Imports
import { HomePageContainer }from "./styles";

// Components Imports
import Directory from "./components/Directory";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  )
}

export default HomePage;
