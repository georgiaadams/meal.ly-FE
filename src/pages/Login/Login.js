import React, { Component } from "react";
import { withAuth } from "./../../context/auth-context";

class Login extends Component {
  state = { email: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    // Call function coming from AuthProvider ( via withAuth )
    this.props.providerLogin(email, password);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="login">
        <h1>Login</h1>

        <form onSubmit={this.handleFormSubmit}>
          <label></label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handleChange}
          />
          <br />
          <label></label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit" value="Login">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default withAuth(Login);
