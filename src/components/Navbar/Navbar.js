import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../../context/auth-context";

class Navbar extends Component {
  render() {
    // const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="navbar">
        <Link to={"/"} id="home-btn">
          <h4>Home</h4>
        </Link>
        {/* {this.props.isLoggedIn (
          <>
            <p>{this.props.user && this.props.user.firstName}</p>
            <button onClick={this.props.logout}>Logout</button>
          </>
        )} */}
      </nav>
    );
  }
}

export default withAuth(Navbar);
