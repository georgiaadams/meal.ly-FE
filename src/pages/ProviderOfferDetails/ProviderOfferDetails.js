import providerService from "../../services/provider-service";
import React, { Component } from "react";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import { Link } from "react-router-dom";
import AcceptOffer from "../../components/AcceptOffer/AcceptOffer";
import moment from "moment";

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
    return (
      <div>
        <h1>{offer.companyName}</h1>
        <p>{offer.content}</p>
        <p>{offer.quantity}</p>
        <p>Pickup time: {offer.pickupSlot}</p>
        <p>Pickup day: {moment(offer.date).format("LL")}</p>
        <p>{offer.status}</p>
        <Link to={`/provider/offers/edit/${offer._id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={this.deleteOneOffer}>Remove offer</button>
        <BottomNavbar />
        <AcceptOffer />
      </div>
    );
  }
}

export default ProviderOfferDetails;
