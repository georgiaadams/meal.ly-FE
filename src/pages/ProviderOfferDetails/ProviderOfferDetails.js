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
        console.log(data);
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
        <p>{offer.content}</p>
        <p>{offer.quantity}</p>
        <p>Pickup time: {offer.pickupSlot}</p>
        <p>Pickup day: {moment(offer.date).format("LL")}</p>
        <p>Offer status: {offer.status}</p>

        {renderButtons()}
        <BottomNavbar />
      </div>
    );
  }
}

export default ProviderOfferDetails;
