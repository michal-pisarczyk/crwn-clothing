import React from "react";
import "./sign-in.style.scss";

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
        <form onSubmit={ this.handleSubmit } autoComplete="on">
          <input type="email"
                 name="sign-in-email"
                 value={ this.state.email }
                 placeholder="Email"
                 onChange={ this.handleChange }
                 required /><br />
          <input type="password"
                 name="sign-in-password"
                 value={ this.state.password }
                 placeholder="Password"
                 onChange={ this.handleChange }
                 required /><br />
          <input type="submit" value="Sign in" />
          <input type="submit" value="Sign in with Google" />
        </form>
      </div>
    )
  }
}

export default SignIn;
