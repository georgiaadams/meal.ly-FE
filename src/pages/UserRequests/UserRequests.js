import React, { Component } from "react";
import userService from "../../services/user-service";
import CompleteOffer from "../../components/CompleteOffer";

class UserRequests extends Component {
  state = {
    readyOffers: [],
  };

  componentDidMount() {
    userService
      .getPendingOffersUser()
      .then((offers) => {
        console.log(offers);

        const data = offers.filter((offer) => offer.status === "ready");
        console.log(data);
        this.setState({ readyOffers: data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { readyOffers } = this.state;
    return (
      <div>
        <h2>All Pending Requests</h2>
        <h4>Requested</h4>
        <h4>Ready for Collection</h4>
        {readyOffers.map((offer) => (
          <div key={offer._id}>
            <p>{offer.companyName}</p>
            <p>{offer.pickupSlot}</p>
            <p>{offer.comments}</p>

            <CompleteOffer offerId={offer._id} />
          </div>
        ))}
      </div>
    );
  }
}

export default UserRequests;
