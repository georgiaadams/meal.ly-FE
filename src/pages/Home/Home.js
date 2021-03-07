import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="main">
      <h1 className="welcome">Welcome to meal.ly!</h1>
      <p>
        Help reduce food waste by connecting with local businesses, so their
        excess food can be shared not thrown away.
      </p>
      <img
        className="food-icon"
        src="https://res.cloudinary.com/skillbees/image/upload/v1615127939/Meal.ly/food-donation_jrc2lu.png"
        alt="food-icon"
      />
      <div className="buttons">
        <Link to="/login">
          <button className="login-business-button">Login for business</button>{" "}
        </Link>
        <br />
        <Link to="/signup">
          <button className="signup-business-button">
            Sign up for business
          </button>{" "}
        </Link>
        <br />
        <hr className="hr-home" />
        <Link to="/user/login">
          <button className="user-login-button">Login for users</button>{" "}
        </Link>
        <br />
        <Link to="/user/signup">
          <button className="user-signup-button">Sign up for users</button>{" "}
        </Link>
      </div>
      <div className="footer">
        <p>Designed by Anna & Georgia</p>
      </div>
    </div>
  );
}

export default Home;
