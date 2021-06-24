import React from "react";
import { SignInSignUpPageContainer } from "./sign-in-sign-up.style";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInSignUpPage = () => (
  <SignInSignUpPageContainer>
    <SignIn />
    <SignUp />
  </SignInSignUpPageContainer>
);

export default SignInSignUpPage;
