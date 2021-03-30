import React from "react";
import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password.</span>
        <form onSubmit={ this.handleSubmit }>
          <FormInput handleChange={ this.handleChange }
                     label="Email"
                     type="email"
                     name="sign-in-email"
                     value={ this.state.email }
                     required />
          <FormInput handleChange={ this.handleChange }
                     label="Password"
                     type="password"
                     name="sign-in-password"
                     value={ this.state.password }
                     required />
          <input type="submit" value="Sign in" />
          <input type="submit" value="Sign in with Google" />
        </form>
      </div>
    )
  }
}

export default SignIn;
