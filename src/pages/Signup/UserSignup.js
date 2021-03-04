import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../../context/auth-context";

class UserSignup extends Component {
  state = { firstName: "", lastName: "", email: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password } = this.state;

    this.props.signup(firstName, lastName, email, password);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { firstName, lastName, email, password } = this.state;
    return (
      <div>
        <h1>User Sign Up</h1>

        <form onSubmit={this.handleFormSubmit}>
          <label>Firstname:</label>
          <input
            type="text"
            name="firstname"
            value={firstName}
            onChange={this.handleChange}
          />

          <label>Lastname:</label>
          <input
            type="text"
            name="lastname"
            value={lastName}
            onChange={this.handleChange}
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          <input type="submit" value="Signup" />
        </form>

        <p>Already have account?</p>
        <Link to={"/user/login"}> Login</Link>
      </div>
    );
  }
}

export default withAuth(UserSignup);
