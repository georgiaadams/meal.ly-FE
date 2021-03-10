import React, { Component } from "react";
import userService from "../../services/user-service";
import UserBottomNavbar from "../../components/BottomNavbar/UserBottomNavbar";
import "./CompletedOffers.css";
import moment from "moment";

class CompletedOffers extends Component {
  state = {
    completedOffers: [],
  };

  componentDidMount() {
    userService
      .getCompletedOffersUser()
      .then((offers) => {
        console.log(offers);
        const data = offers.filter((offer) => offer.status === "completed");
        this.setState({ completedOffers: data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { completedOffers } = this.state;
    return (
      <div>
        <div className="user-completed-offers">
          <h2>Your Completed Orders</h2>
          {completedOffers.map((offer) => (
            <div key={offer._id}>
              <p>Company: {offer.companyName}</p>
              <p>Order: {offer.content}</p>
              <p>Pickup date: {moment(offer.date).format("LL")}</p>
              <p>Status: {offer.status}</p>
              <hr />
            </div>
          ))}
        </div>
        <UserBottomNavbar />
      </div>
    );
  }
}

export default CompletedOffers;
