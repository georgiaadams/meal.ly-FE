import React, { Component } from "react";
import userService from "../../services/user-service";
// import { withAuth } from "../../context/auth-context";

class UserOfferDetails extends Component {
  state = {
    oneOffer: [],
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    userService
      .getOneOfferUser(id)
      .then((data) => {
        console.log(data);
        this.setState({ oneOffer: data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { oneOffer } = this.state;

    return (
      <div>
        <h2>Offer Details</h2>
        <h3>{oneOffer.companyName}</h3>
        <h3>{oneOffer.address}</h3>
        <h3>{oneOffer.phoneNumber}</h3>
        <h3>{oneOffer.content}</h3>
      </div>
    );
  }
}

export default UserOfferDetails;
