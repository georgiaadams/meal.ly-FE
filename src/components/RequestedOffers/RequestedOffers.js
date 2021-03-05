import React, { Component } from "react";
import userService from "../../services/user-service";

class RequestedOffers extends Component {
  state = {
    pendingOffers: [],
  };

  componentDidMount() {
    userService.getPendingOffersUser().then((data) => {
      this.setState({ pendingOffers: data });
    });
  }
  render() {
    const { pendingOffers } = this.state;
    return (
      <div>
        <h2>Your Requested Offers</h2>
        {pendingOffers.map((pendingOffer) => {
          return (
            <div>
              <p>{pendingOffer.companyName}</p>
              <p>{pendingOffer.address}</p>
              <p>{pendingOffer.phoneNumber}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default RequestedOffers;
