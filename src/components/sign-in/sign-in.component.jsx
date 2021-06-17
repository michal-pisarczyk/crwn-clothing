import React, { useState } from "react";
import { SignInContainer, ButtonsContainer } from "./sign-in.style";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { googleSignInStart, emailSignInStart }
  from "../../redux/user/user.actions";
import { connect } from "react-redux";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  return (
    <SignInContainer>
      <h2>I already have an account.</h2>
      <span>Sign in with your email and password.</span>
      <form onSubmit={ handleSubmit }>
        <FormInput label="Email"
                   type="email"
                   name="email"
                   value={ email }
                   onChange={ event => setEmail(event.target.value) }
                   required />
        <FormInput label="Password"
                   type="password"
                   name="password"
                   value={ password }
                   onChange={ event => setPassword(event.target.value) }
                   required />
        <ButtonsContainer>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button"
                        onClick={ googleSignInStart }
                        isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(
    emailSignInStart({ email, password })
  )
});

export default connect(null, mapDispatchToProps)(SignIn);
