//Library Imports
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//Style Imports
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./styles";

//Components Imports
import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";

//Utilities Imports
import { auth } from "../../services/firebase/firebase";

//Image Imports
import {ReactComponent as Logo} from "../../assets/crown.svg";

//Redux imports
import { selectCurrentUser } from "../../store/modules/user/selectors";
import { selectCartHidden } from "../../store/modules/cart/selectors";

const Header = ({ currentUser, hidden }) => {
  return(
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/shop">
          CONTACT
        </OptionLink>
        {
          currentUser ?
          <OptionLink as="div" onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
          :
          <OptionLink to="/auth">SIGN IN</OptionLink>
        }
        <CartIcon />
      </OptionsContainer>
      {!hidden ?
        <CartDropdown />
        : null
      }
      
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);