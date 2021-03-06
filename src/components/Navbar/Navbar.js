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
        <img src="https://res.cloudinary.com/skillbees/image/upload/v1615051038/Meal.ly/logo_omac4x.png"/>

        {/* if (isLoggedIn && !isProviderUser) {
      <div> <p>{user && user.firstName}</p>
        <button onClick={logout}>Logout</button> </div>
    } else if (isLoggedIn && isProviderUser) {

    <div> <p>{user && user.companyName}</p>
        <button onClick={logout}>Logout</button> </div>
    } else {
     
      <>
      <Link to="/login">
        <button className="navbar-button">Login</button>{" "}
      </Link>
      <br />
      <Link to="/signup">
        <button className="navbar-button">Sign Up</button>{" "}
      </Link>
    </>
    } */}
    {isLoggedIn  ? (
          <>
            <p>{user && user.firstName}</p>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);
