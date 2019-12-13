//Library Imports
import React, { Component } from "react";
import { connect } from "react-redux";

//Style Imports
import "./styles.scss";

//Components Imports
import FormInput from "../../../../components/FormInput";
import CustomButton from "../../../../components/CustomButton";

//Redux imports
import { signUpStart } from "../../../../store/modules/user/actions";

class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: "",
    confirmPassword: "",
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    const { onSignUpStart } = this.props;

    if(password !== confirmPassword) {
      alert("Password don´t match");
      return;
    }

    onSignUpStart({displayName, email, password });


    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(email, password);

    //   await createUserProfileDocument(user, {displayName});


    // }catch (error) {
    //   console.error(error);
    // }
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput 
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput 
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput 
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput 
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit"> SIGN UP </CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSignUpStart: (userData) => dispatch(signUpStart(userData)),
})

export default connect(null, mapDispatchToProps)(SignUp);