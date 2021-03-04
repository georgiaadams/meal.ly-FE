import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../../context/auth-context";

class Signup extends Component {
  state = {
    companyName: "",
    address: "",
    phoneNumber: 0,
    email: "",
    password: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { companyName, address, phoneNumber, email, password } = this.state;

    this.props.providerSignup(
      companyName,
      address,
      phoneNumber,
      email,
      password
    );
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { companyName, address, phoneNumber, email, password } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit}>
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={companyName}
            onChange={this.handleChange}
          />

          <br />

          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={this.handleChange}
          />

          <br />

          <label>Phone Number:</label>
          <input
            type="number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={this.handleChange}
          />

          <br />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />

          <br />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          <br />

          <input type="submit" value="Signup" />
        </form>

        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);

// const EnhancedSignup = withAuth(Signup)
// export default EnhancedSignup;
