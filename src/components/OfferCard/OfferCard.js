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
        <h2>New Offers</h2>
        {allOffers.slice(0, 2).map((offers) => {
          return (
            <div key={offers._id}>
              <h3>Business: {offers.companyName}</h3>
              <h3>Content: {offers.content}</h3>
              <h3>Quantity: {offers.quantity}</h3>
              <h3></h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default OfferCard;
