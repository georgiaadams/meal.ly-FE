import React, { Component } from "react";
import userService from "../../services/user-service";
// import { withAuth } from "../../context/auth-context";
import PickupRequest from "../../components/PickupRequest/PickupRequest";
import "./OfferDetails.css";

class OfferDetails extends Component {
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
      <div className="offer-details">
        <div className="offer-header">
          {/* <div>
          <Link to={"/user/offers"}>
            <button className="backbtn">Back to all</button>
          </Link>
        </div> */}
          <h2>Offer Details</h2>
        </div>
        <img
          width="150px"
          style={{ borderRadius: "15px" }}
          src={oneOffer.image}
          alt="offer-img"
        />
        <div className="offer-info">
          <p>Company: {oneOffer.companyName}</p>
          <p>Content: {oneOffer.content}</p>
          <p>
            Quantity: {oneOffer.quantity} | Pickup: {oneOffer.pickupSlot}
          </p>
        </div>
        <hr />
        <h4>Pickup Request</h4>
        <PickupRequest />
      </div>
    );
  }
}

export default OfferDetails;
