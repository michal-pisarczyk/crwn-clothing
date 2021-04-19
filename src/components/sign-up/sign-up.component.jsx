import React from "react";
import "./sign-up.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

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

    const { displayName,
            email,
            password,
            confirmPassword } = this.state;

    if (password != confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });

    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="sign-up">
        <h2>I do not have an account.</h2>
        <span>Sign up with your email and password.</span>
        <form onSubmit={ this.handleSubmit }>
          <FormInput label="Display Name"
                     type="text"
                     name="sign-up-name"
                     value={ this.state.displayName }
                     required />
          <FormInput label="Email"
                     type="email"
                     name="sign-up-email"
                     value={ this.state.email }
                     required />
          <FormInput label="Password"
                     type="password"
                     name="sign-up-password"
                     value={ this.state.password }
                     required />
          <FormInput label="Confirm Password"
                     type="password"
                     name="sign-up-password-confirmation"
                     value={ this.state.confirmPassword }
                     required />
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;
