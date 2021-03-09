import React from "react";
import { Link } from "react-router-dom";
import "./BottomNavbar.css";

function UserBottomNavbar() {
  return (
    <div>
      <div className="user-navbar">
        <Link to={"/user/offers"}>
          <p>All offers</p>
        </Link>
        <Link to={"/user/offers/pending"}>
          <p>Your requests</p>
        </Link>
        <Link to={"/user/offers/completed"}>
          <p>Completed Offers</p>
        </Link>
        <Link to={"/user/profile"}>
          <p>My profile</p>
        </Link>
      </div>
    </div>
  );
}

export default UserBottomNavbar;
