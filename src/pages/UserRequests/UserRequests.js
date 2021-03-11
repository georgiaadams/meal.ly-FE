import React, { Component } from "react";
import userService from "../../services/user-service";
import CompleteOffer from "../../components/CompleteOffer";
import socket from "../../services/sockets/socket";
import { withAuth } from "../../context/auth-context";
import UserBottomNavbar from "../../components/BottomNavbar/UserBottomNavbar";
import ProviderLocation from "../../components/ProviderLocation/ProviderLocation";
import moment from "moment";
import "./UserRequests.css";
import { Link } from "react-router-dom";

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
        <h2 style={{marginLeft: '20px', color: '#331832'}}>{this.renderReadyOrRequestedTitle()}</h2>
        <button className="top-button"
          style={{ backgroundColor: "#82aba1", height: "38px", width: "100px" }}
          onClick={() => this.setState({ showingReady: !showingReady })}
        >
          {showingReady ? "Show Requested" : "Show Ready"}
        </button>
        {(showingReady ? readyOffers : requestedOffers).map((offer) => (
          <div className="requested-offers" style={{ textAlign: "center" }} key={offer._id}>
            <p>
              <img
                className="offer-icon"
                src="https://res.cloudinary.com/skillbees/image/upload/v1615452522/Meal.ly/food-stall_irwffa.png"
                alt="company-img"
              />{" "}
              <Link
                style={{ color: "#331832" }}
                to={`/user/offers/${offer._id}`}
              >
                {offer.companyName}
              </Link>
            </p>
            <p>
              <img
                className="offer-icon"
                src="https://res.cloudinary.com/skillbees/image/upload/v1615134623/Meal.ly/clock_snwysd.png"
                alt="clock-icon"
              />{" "}
              {offer.pickupSlot}
            </p>
            <p>
              {" "}
              <img
                className="offer-icon"
                src="https://res.cloudinary.com/skillbees/image/upload/v1615134623/Meal.ly/calendar_hhbgvr.png"
                alt="calendar-icon"
              />{" "}
              {moment(offer.date).format("LL")}
            </p>
            <p>
              <img
                className="offer-icon"
                src="https://res.cloudinary.com/skillbees/image/upload/v1615455306/Meal.ly/placeholder_lczeom.png"
                alt="address-icon"
              />
              {offer.address}
            </p>
            {offer.address && <ProviderLocation address={offer.address} />}
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
