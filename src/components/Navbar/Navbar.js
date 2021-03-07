import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../context/auth-context";
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
            <img className="logo" src="https://res.cloudinary.com/skillbees/image/upload/v1615120413/Meal.ly/homelogo_dovbaf.png" alt="logo"/>
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
            <img onClick={logout} className="logout" src="https://res.cloudinary.com/skillbees/image/upload/v1615137241/Meal.ly/logout_ylpnmq.png"/>
          </>
        ) : (
          <></>
        )}
      </nav>

      //mobile navbar
          
  
    );
  }
}

export default withAuth(Navbar);
