//Library Imports
import React, { Component } from "react";

//Components Imports
import FormInput from "../../components/FormInput";
import CustomButton from "../../components/CustomButton";

//Utilities Imports
import { signInWithGoogle } from "../../firebase/firebase";

//Style imports
import "./styles.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleChange = event => {
    const { value, name } = event.target;

    console.log(event.target.name);

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <CustomButton type="submit"> Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle}> Sign in with Google </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
