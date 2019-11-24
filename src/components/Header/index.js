//Library Imports
import React from "react";
import { Link } from "react-router-dom";

//Utilities Imports
import { auth } from "../../services/firebase/firebase";

//Style Imports
import "./styles.scss";

//Image Imports
import {ReactComponent as Logo} from "../../assets/crown.svg";

const Header = ({ currentUser }) => {
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
      </div>
    </div>
  );
}

export default Header;