import React, { Component } from "react";
import { withAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedIn, isProviderUser } = this.props;

    return (
      <nav className="navbar">
        <Link
          to={isProviderUser ? "/provider/homepage" : "/user/homepage"}
          id="home-btn"
        >
          <img
            className="logo"
            src="https://res.cloudinary.com/skillbees/image/upload/v1615120413/Meal.ly/homelogo_dovbaf.png"
            alt="home-logo"
          />
        </Link>

        {isLoggedIn && (
          <>
            <p>{user && isProviderUser ? user.companyName : user.firstName}</p>
            <img
              onClick={logout}
              className="logout"
              src="https://res.cloudinary.com/skillbees/image/upload/v1615137241/Meal.ly/logout_ylpnmq.png"
              alt="logout-img"
            />
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);
