import userService from "../../services/user-service";
import React, { Component } from "react";
import "./OfferCard.css";

class OfferCard extends Component {
  state = {
    allOffers: [],
  };

  componentDidMount() {
    userService.getOffersUser().then((data) => {
      this.setState({ allOffers: data });
    });
  }
  render() {
    const { allOffers } = this.state;
    return (
      <div>
        {allOffers.slice(0, 2).map((offers) => {
          return (
            <div className="offer-card" key={offers._id}>
              <div className="offer-info">
                <p>Company: {offers.companyName}</p>
                <p>Content: {offers.content}</p>
                <p>Quantity: {offers.quantity}</p>
              </div>

              <div>
                <img width="80px" src={offers.image} alt="offer-img" />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default OfferCard;
