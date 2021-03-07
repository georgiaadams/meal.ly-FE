import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="landing-page">
      <h1>Welcome to Meal.ly</h1>
      <Link to="/login">
        <button className="navbar-button">Login</button>{" "}
      </Link>
      <br />
      <Link to="/signup">
        <button className="navbar-button">Sign Up</button>{" "}
      </Link>
      <Link to="/user/login">
        <button className="navbar-button">User Login</button>{" "}
      </Link>
      <br />
      <Link to="/user/signup">
        <button className="navbar-button">User Sign Up</button>{" "}
      </Link>
    </div>
  );
}

export default Home;
