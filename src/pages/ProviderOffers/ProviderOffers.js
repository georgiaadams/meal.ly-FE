import providerService from "../../services/provider-service";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import "./ProviderOffers.css";

class ProviderOffers extends Component {
  state = {
    offers: [],
  };

  componentDidMount() {
    providerService
      .getAllOffersProvider()
      .then((data) => {
        console.log(data);
        this.setState({ offers: data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="offer">
        {this.state.offers.map((offer) => {
          return (
            <div className="provider-offer-details">
              <div key={offer._id}>
                <h3>{offer.content}</h3>
                <p>{offer.quantity}</p>
                <p>Pickup: {offer.pickupSlot}</p>
                <p>Posted on: {offer.date}</p>
                <p>Status: {offer.status}</p>
                <Link to={`/provider/offers/${offer._id}`}>
                  <button className="view-details">View details</button>
                </Link>
              </div>
            </div>
          );
        })}
        <BottomNavbar />
      </div>
    );
  }
}

export default ProviderOffers;
