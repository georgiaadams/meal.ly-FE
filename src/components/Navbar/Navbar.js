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
          <h2>Home</h2>
        </Link>
        {isLoggedIn ? (
          <>
            <p>{user && user.firstName}</p>
            {/* <img
              src="/profileIcon.png"
              alt="profile"
              width="30px"
              height="30px"
            /> */}
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <></>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);
