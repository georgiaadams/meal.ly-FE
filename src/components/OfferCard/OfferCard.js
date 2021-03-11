import userService from "../../services/user-service";
import React, { Component } from "react";
import "./OfferCard.css";
import socket from "../../services/sockets/socket";
import { Link } from "react-router-dom";

class OfferCard extends Component {
  state = {
    allOffers: [],
  };

  componentDidMount() {
    this.getAllNewOffers();
    socket.on("newOffer", (newOffer) => {
      this.setState({ allOffers: [newOffer, ...this.state.allOffers] });
    });
  }

  getAllNewOffers = () => {
    userService
      .getOffersUser()
      .then((data) => {
        this.setState({ allOffers: data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { allOffers } = this.state;
    return (
      <div>
        {allOffers.slice(0, 2).map((offers) => {
          return (
            <div className="offer-card" key={offers._id}>
              <div className="offer-info">
                <p><img className="offer-icon" src="https://res.cloudinary.com/skillbees/image/upload/v1615452522/Meal.ly/food-stall_irwffa.png"/>Company: {offers.companyName}</p>
                <p><img className="offer-icon" src="https://res.cloudinary.com/skillbees/image/upload/v1615134623/Meal.ly/healthy-food_jf07wc.png"/>Content: {offers.content}</p>
                <p><img className="offer-icon" src="https://res.cloudinary.com/skillbees/image/upload/v1615452522/Meal.ly/box_ifs7rr.png"/>Quantity: {offers.quantity}</p>
              </div>

              <div>
                <Link to={`/user/offers/${offers._id}`}>
                  <img width="80px" src={offers.image} alt="offer-img" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default OfferCard;
