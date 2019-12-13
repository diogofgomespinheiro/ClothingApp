//Library Imports
import React, { useState } from "react";
import { connect } from "react-redux";

//Style imports
import "./styles.scss";

//Components Imports
import FormInput from "../../../../components/FormInput";
import CustomButton from "../../../../components/CustomButton";

//Redux imports
import {
  googleSignInStart,
  emailSignInStart
} from "../../../../store/modules/user/actions";

const SignIn = ({ onEmailSignInStart, onGoogleSignInStart }) => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const { email, password } = userData;

  const handleSubmit = async event => {
    event.preventDefault();
    onEmailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={onGoogleSignInStart}
            isGoogleSignIn
          >
            {" "}
            Sign in with Google{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onGoogleSignInStart: () => dispatch(googleSignInStart()),
  onEmailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
