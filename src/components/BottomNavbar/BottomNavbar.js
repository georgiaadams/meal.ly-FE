import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./BottomNavbar.css";

class BottomNavbar extends Component {
    render() {
        return (
            <div className="bottom-navbar">
             <Link to={"/provider/offers"}>
          <p>My offers</p>
        </Link>
        <Link to={"/provider/offers/new"}>
          <p>New offer</p>
        </Link>
        <Link to={"/provider/myprofile"}>
          <p>My profile</p>
        </Link>
        <Link to={"/provider/homepage"}>
          <p>Home</p>
        </Link>
          </div>
        )
    }
}

export default BottomNavbar;
