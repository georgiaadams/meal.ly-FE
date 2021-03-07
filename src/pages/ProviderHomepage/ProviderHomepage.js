import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProviderHomepage.css";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";

class ProviderHomepage extends Component {
  render() {
    return (
      <div className="provider-home">
      <img className="care-icon" src="https://res.cloudinary.com/skillbees/image/upload/v1615127951/Meal.ly/love_louyw3.png" alt="care-icon"/>
        <Link to={"/provider/offers/new"}>
          <button className="add-new-offer">Add a new offer</button>
        </Link>
        <h3>Your pending offers:</h3>
        <Link to={"/provider/offers"}>
          <button className="offers-panel-button">All my offers</button>
        </Link>
        <BottomNavbar/>
      </div>
    );
  }
}

export default ProviderHomepage;
