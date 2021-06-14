import React from "react";
import { SignUpContainer, Title } from "./sign-up.style";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { signUpStart } = this.props;
    const { displayName,
            email,
            password,
            confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    signUpStart({ displayName, email, password });
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <SignUpContainer>
        <Title>I do not have an account.</Title>
        <span>Sign up with your email and password.</span>
        <form onSubmit={ this.handleSubmit }>
          <FormInput label="Display Name"
                     type="text"
                     name="displayName"
                     value={ this.state.displayName }
                     handleChange={ this.handleChange }
                     required />
          <FormInput label="Email"
                     type="email"
                     name="email"
                     value={ this.state.email }
                     handleChange={ this.handleChange }
                     required />
          <FormInput label="Password"
                     type="password"
                     name="password"
                     value={ this.state.password }
                     handleChange={ this.handleChange }
                     required />
          <FormInput label="Confirm Password"
                     type="password"
                     name="confirmPassword"
                     value={ this.state.confirmPassword }
                     handleChange={ this.handleChange }
                     required />
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userDetails => dispatch(signUpStart(userDetails))
});

export default connect(null, mapDispatchToProps)(SignUp);
