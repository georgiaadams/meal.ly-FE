import React, { Component } from "react";
import { withAuth } from "./../../context/auth-context";
import "./Login.css";

class UserLogin extends Component {
  state = { email: "", password: "", hasError: false, errorInfo: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    // Call function coming from AuthProvider ( via withAuth )
    this.props.userLogin(email, password)
    .catch((error) => {
      this.setState({ hasError: true, errorInfo: error.message });
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, hasError, errorInfo } = this.state;

    return (
      <div className="login">
        <h1>User Login</h1>

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
        {hasError && <p>{errorInfo}</p>}
      </div>
    );
  }
}

export default withAuth(UserLogin);
