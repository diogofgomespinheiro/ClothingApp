//Library Imports
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Components Imports
import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";

//Utilities Imports
import { auth } from "../../services/firebase/firebase";

//Style Imports
import "./styles.scss";

//Image Imports
import {ReactComponent as Logo} from "../../assets/crown.svg";

const Header = ({ currentUser, hidden }) => {
  return(
    <div className="header">
      <Link className="logo-container " to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {
          currentUser ?
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className="option" to="/auth">SIGN IN</Link>
        }
        <CartIcon />
      </div>
      {!hidden ?
        <CartDropdown />
        : null
      }
      
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden,
  };
}

export default connect(mapStateToProps)(Header);