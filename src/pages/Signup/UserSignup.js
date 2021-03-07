import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../../context/auth-context";
import "./Signup.css";

class UserSignup extends Component {
  state = { firstName: "", lastName: "", email: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password } = this.state;

    this.props.userSignup(firstName, lastName, email, password);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { firstName, lastName, email, password } = this.state;
    return (
      <div className="signup">
        <h1>User Signup</h1>

        <form onSubmit={this.handleFormSubmit}>
          <label></label>
          <input
            type="text"
            name="firstName"
            placeholder="firstname"
            value={firstName}
            onChange={this.handleChange}
          />
          <br />
          <label></label>
          <input
            type="text"
            name="lastName"
            placeholder="lastname"
            value={lastName}
            onChange={this.handleChange}
          />
          <br />
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
          <button className="signup-btn" type="submit" value="Signup">
            Signup
          </button>
        </form>

        <p>Already have account?</p>
        <Link to={"/user/login"}>
          {" "}
          <button className="login-btn">Login</button>
        </Link>
      </div>
    );
  }
}

export default withAuth(UserSignup);
