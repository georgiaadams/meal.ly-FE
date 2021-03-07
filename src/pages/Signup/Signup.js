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
      <div className="signup">
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit}>
          <label></label>
          <input
            type="text"
            name="companyName"
            placeholder="company name"
            value={companyName}
            onChange={this.handleChange}
          />

          <br />

          <label></label>
          <input
            type="text"
            name="address"
            placeholder="address"
            value={address}
            onChange={this.handleChange}
          />

          <br />

          <label></label>
          <input
            type="number"
            name="phoneNumber"
            placeholder="phone number"
            value={phoneNumber}
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
        <Link to={"/login"}>
          {" "}
          <button className="login-btn">Login</button>
        </Link>
      </div>
    );
  }
}

export default withAuth(Signup);

// const EnhancedSignup = withAuth(Signup)
// export default EnhancedSignup;
