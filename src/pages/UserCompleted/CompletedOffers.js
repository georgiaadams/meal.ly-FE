import React, { Component } from "react";
import userService from "../../services/user-service";
import UserBottomNavbar from "../../components/BottomNavbar/UserBottomNavbar";

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
        <h2>Your Completed Orders</h2>
        {completedOffers.map((offer) => (
          <div key={offer._id}>
            <h3>{offer.companyName}</h3>
            <h3>{offer.content}</h3>
            <h3>{offer.status}</h3>
          </div>
        ))}
        <UserBottomNavbar />
      </div>
    );
  }
}

export default CompletedOffers;
