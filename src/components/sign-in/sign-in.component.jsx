import React from "react";
import { SignInContainer, ButtonsContainer } from "./sign-in.style";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle }
  from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(
        email,
        password
      );
      // on success, clear state.email and
      //                   state.password
      this.setState({ email: "", password: "" });

    } catch (error) {
      console.error(error);
    }
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <SignInContainer>
        <h2>I already have an account.</h2>
        <span>Sign in with your email and password.</span>
        <form onSubmit={ this.handleSubmit }>
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
          <ButtonsContainer>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton type="button"
                          onClick={ signInWithGoogle }
                          isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
