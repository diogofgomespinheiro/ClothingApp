//Library Imports
import React, { Component } from "react";
import { connect } from "react-redux";

//Style imports
import "./styles.scss";

//Components Imports
import FormInput from "../../../../components/FormInput";
import CustomButton from "../../../../components/CustomButton";

//Redux imports
import { googleSignInStart, emailSignInStart } from "../../../../store/modules/user/actions";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { onEmailSignInStart } = this.props;
    const { email, password } = this.state;

    onEmailSignInStart(email, password);
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const { onGoogleSignInStart } = this.props;

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign in</CustomButton>
            <CustomButton type="button" onClick={onGoogleSignInStart} isGoogleSignIn> Sign in with Google </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onGoogleSignInStart : () => dispatch(googleSignInStart()),
  onEmailSignInStart: (email,password) => dispatch(emailSignInStart({ email,password })),
})

export default connect(null, mapDispatchToProps)(SignIn);
