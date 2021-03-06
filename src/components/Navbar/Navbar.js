import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../context/auth-context";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedIn, isProviderUser } = this.props;

    return (
      <nav className="navbar">
        <Link
          to={isProviderUser ? "/provider/homepage" : "/user/homepage"}
          id="home-btn"
        >
          <h4>Home</h4>
        </Link>
        {isLoggedIn ? (
          <>
            <p>{user && user.companyName}</p>
            <img
              src="/profileIcon.png"
              alt="profile"
              width="30px"
              height="30px"
            />
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="navbar-button">Login</button>{" "}
            </Link>
            <br />
            <Link to="/signup">
              <button className="navbar-button">Sign Up</button>{" "}
            </Link>
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);
