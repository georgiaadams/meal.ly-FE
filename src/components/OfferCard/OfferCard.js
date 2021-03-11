import userService from "../../services/user-service";
import React, { Component } from "react";
import "./OfferCard.css";
import socket from "../../services/sockets/socket";

class OfferCard extends Component {
  state = {
    allOffers: [],
  };

  componentDidMount() {
    this.getAllNewOffers();
    socket.on("newOffer", (newOffer) => {
      this.setState({ allOffers: [newOffer, ...this.state.allOffers] });
    });
    socket.on("offerEdited", (editedOffer) => {
      const allOffersCopy = [...this.state.allOffers];
      const editedOfferIndex = allOffersCopy.indexOf(
        (offer) => offer._id === editedOffer._id
      );
      if (editedOfferIndex) {
        allOffersCopy.splice(editedOfferIndex, 1, editedOffer);
        this.setState({ allOffers: allOffersCopy });
      }
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
