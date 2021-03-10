import React, { Component } from "react";
import userService from "../../services/user-service";
import CompleteOffer from "../../components/CompleteOffer";
import socket from "../../services/sockets/socket";
import { withAuth } from "../../context/auth-context";
import UserBottomNavbar from "../../components/BottomNavbar/UserBottomNavbar";
import ProviderLocation from "../../components/ProviderLocation";

class UserRequests extends Component {
  state = {
    readyOffers: [],
    requestedOffers: [],
    showingReady: true,
  };

  componentDidMount() {
    this.getOffers();
    socket.on("offerAccepted", (offer) => {
      this.getOffers();
    });
  }
  getOffers = () => {
    userService
      .getPendingOffersUser()
      .then(({ ready, requested }) => {
        this.setState({ readyOffers: ready, requestedOffers: requested });
      })
      .catch((err) => console.log(err));
  };
  handleClick = async (offerId) => {
    await userService.completeOffer({ offerId });
    socket.emit("collectOffer", { message: "User has collected" });
    this.props.history.push("/user/offers/completed");
  };
  renderReadyOrRequestedTitle = () =>
    this.state.showingReady ? "Ready" : "Requested";

  render() {
    const { readyOffers, requestedOffers, showingReady } = this.state;

    return (
      <div>
        <h2>{this.renderReadyOrRequestedTitle()} Requests</h2>
        <button onClick={() => this.setState({ showingReady: !showingReady })}>
          {showingReady ? "show requested" : "show ready"}
        </button>
        {(showingReady ? readyOffers : requestedOffers).map((offer) => (
          <div key={offer._id}>
            <p>{offer.companyName}</p>
            <p>{offer.pickupSlot}</p>
            <p>{offer.comments}</p>
            <p>{offer.address}</p>
            {showingReady && (
              <CompleteOffer handleClick={() => this.handleClick(offer._id)} />
            )}
          </div>
        ))}
        <UserBottomNavbar />
      </div>
    );
  }
}

export default withAuth(UserRequests);
