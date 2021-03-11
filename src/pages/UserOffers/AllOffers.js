import React from "react";
import userService from "../../services/user-service";
import { Link } from "react-router-dom";
import "../../components/OfferCard/OfferCard.css";
import "./AllOffers.css";
import socket from "../../services/sockets/socket";
import UserBottomNavbar from "../../components/BottomNavbar/UserBottomNavbar";

class AllOffers extends React.Component {
  state = {
    allOffers: [],
  };

  componentDidMount() {
    this.getAllOffers();
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

  getAllOffers = () => {
    userService
      .getOffersUser()
      .then((data) => {
        this.setState({ allOffers: data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { allOffers } = this.state;
    console.log(allOffers);

    return (
      <div>
        <div className="all-offers">
          <h2>All Offers</h2>
          {allOffers.map((offers) => {
            return (
              <div className="offer-card" key={offers._id}>
                <div className="offer-info">
                  <p>{offers.companyName}</p>
                  <p>{offers.quantity}</p>
                  <p>{offers.content}</p>
                </div>
                <div>
                  <img width="80px" src={offers.image} alt="offerimg" />
                </div>
                <div>
                  <Link to={`/user/offers/${offers._id}`}>
                    <button>See more</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <UserBottomNavbar />
      </div>
    );
  }
}

export default AllOffers;
