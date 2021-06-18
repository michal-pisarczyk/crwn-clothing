import React, { useState } from "react";
import { SignUpContainer, Title } from "./sign-up.style";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

const SignUp = ({ signUpStart }) => {
  const [ signUpDetails, setSignUpDetails ] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const {
    displayName,
    email,
    password,
    confirmPassword } = signUpDetails;

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    signUpStart({ displayName, email, password });
  }

  const handleChange = event => {
    const { value, name } = event.target;
    setSignUpDetails({ ...signUpDetails, [name]: value });
  }

  return (
    <SignUpContainer>
      <Title>I do not have an account.</Title>
      <span>Sign up with your email and password.</span>
      <form onSubmit={ handleSubmit }>
        <FormInput label="Display Name"
                   type="text"
                   name="displayName"
                   value={ displayName }
                   handleChange={ handleChange }
                   required />
        <FormInput label="Email"
                   type="email"
                   name="email"
                   value={ email }
                   handleChange={ handleChange }
                   required />
        <FormInput label="Password"
                   type="password"
                   name="password"
                   value={ password }
                   handleChange={ handleChange }
                   required />
        <FormInput label="Confirm Password"
                   type="password"
                   name="confirmPassword"
                   value={ confirmPassword }
                   handleChange={ handleChange }
                   required />
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userDetails => dispatch(signUpStart(userDetails))
});

export default connect(null, mapDispatchToProps)(SignUp);
