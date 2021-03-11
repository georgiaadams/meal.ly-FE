import providerService from "../../services/provider-service";
import React, { Component } from "react";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import { Link } from "react-router-dom";
import AcceptOffer from "../../components/AcceptOffer/AcceptOffer";
import moment from "moment";
import "./ProviderOfferDetails.css";

class ProviderOfferDetails extends Component {
  state = {
    offer: [],
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    providerService
      .getOneOfferProvider(id)
      .then((data) => {
        this.setState({ offer: data });
      })
      .catch((err) => console.log(err));
  }

  deleteOneOffer = () => {
    const id = this.props.match.params.id;
    providerService
      .deleteOffer(id)
      .then(() => this.props.history.push("/provider/offers"))
      .catch((err) => console.log(err));
  };

  render() {
    const { offer } = this.state;
    const renderButtons = () => {
      if (offer.status === "new") {
        return (
          <div className="buttons-conditional">
            <Link to={`/provider/offers/edit/${offer._id}`}>
              <button className="edit-provider-offer">Edit</button>
            </Link>
            <p
              className="one-provideroffer-delete"
              onClick={this.deleteOneOffer}
            >
              Remove offer
            </p>
          </div>
        );
      } else if (offer.status === "requested") {
        return (
          <div className="buttons-conditional">
            <Link to={`/provider/offers/edit/${offer._id}`}>
              <button className="edit-provider-offer">Edit</button>
            </Link>
            <AcceptOffer />
            <p
              className="one-provideroffer-delete"
              onClick={this.deleteOneOffer}
            >
              Remove offer
            </p>
          </div>
        );
      } else if (offer.status === "completed") {
        return (
          <div className="buttons-conditional">
            <p
              className="one-provideroffer-delete"
              onClick={this.deleteOneOffer}
            >
              Remove offer
            </p>
          </div>
        );
      } else {
        return (
          <p className="conditional-warning">You cannot change this offer</p>
        );
      }
    };

    return (
      <div className="provider-oneoffer-details">
        <p>
          <img
            className="offer-icon"
            src="https://res.cloudinary.com/skillbees/image/upload/v1615134623/Meal.ly/healthy-food_jf07wc.png"
            alt="food-img"
          />{" "}
          {offer.content}
        </p>
        <p>
          <img
            className="offer-icon"
            src="https://res.cloudinary.com/skillbees/image/upload/v1615452522/Meal.ly/box_ifs7rr.png"
            alt="quantity-img"
          />{" "}
          {offer.quantity}
        </p>
        <p>
          <img
            className="offer-icon"
            src="https://res.cloudinary.com/skillbees/image/upload/v1615134623/Meal.ly/clock_snwysd.png"
            alt="time-img"
          />{" "}
          {offer.pickupSlot}
        </p>
        <p>
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
            alt="address-img"
          />{" "}
          {offer.address}
        </p>
        <p>
          <img
            className="offer-icon"
            src="https://res.cloudinary.com/skillbees/image/upload/v1615134623/Meal.ly/charging-circle_p7sls6.png"
            alt="waiting-icon"
          />{" "}
          Status: {offer.status}
        </p>

        {renderButtons()}
        <BottomNavbar />
      </div>
    );
  }
}

export default ProviderOfferDetails;
