import providerService from "../../services/provider-service";
import React, { Component } from "react";
import { Link } from "react-router-dom";

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

  render() {
    return (
      <div>
        <h1>{this.state.offer.companyName}</h1>
        <p>{this.state.offer.content}</p>
        <p>{this.state.offer.quantity}</p>
        <p>Pickup time: {this.state.offer.pickupSlot}</p>
        <p>Posted on: {this.state.offer.date}</p>
        <p>{this.state.offer.status}</p>
        <Link to={`/provider/offers/edit/${this.state.offer._id}`}>
          <button>Edit</button>
        </Link>
      </div>
    );
  }
}

export default ProviderOfferDetails;
