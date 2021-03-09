import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../services/user-service";
import moment from "moment";

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
              <Link to={`/user/offers/${pendingOffer._id}`}>
                <p>{pendingOffer.companyName}</p>{" "}
              </Link>
              <p>{pendingOffer.pickupSlot}</p>
              <p>{moment(pendingOffer.date).format("LL")}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default RequestedOffers;
