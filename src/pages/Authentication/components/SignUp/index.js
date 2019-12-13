//Library Imports
import React, { useState } from "react";
import { connect } from "react-redux";

//Style Imports
import "./styles.scss";

//Components Imports
import FormInput from "../../../../components/FormInput";
import CustomButton from "../../../../components/CustomButton";

//Redux imports
import { signUpStart } from "../../../../store/modules/user/actions";

const SignUp = ({ onSignUpStart }) => {
  const [userData, setUserData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: " "
  });

  const { displayName, email, password, confirmPassword } = userData;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password don´t match");
      return;
    }

    onSignUpStart({ displayName, email, password });
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit"> SIGN UP </CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onSignUpStart: userData => dispatch(signUpStart(userData))
});

export default connect(null, mapDispatchToProps)(SignUp);
