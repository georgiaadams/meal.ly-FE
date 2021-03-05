import providerService from "../../services/provider-service";
import React, { Component } from "react";
import { Link } from 'react-router-dom';

class ProviderOffers extends Component {
  state = {
    offers: [],
  };

  componentDidMount() {
    providerService
      .getAllOffersProvider()
      .then((data) => {
        console.log(data);
        this.setState({ offers: data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.offers.map((offer) => {
          return (
            <div key={offer._id}>
              <h3>{offer.content}</h3>
              <p>{offer.quantity}</p>
              <p>pickup: {offer.pickupSlot}</p>
              <p>posted on: {offer.date}</p>
              <p>status: {offer.status}</p>
              <Link to={`/provider/offers/${offer._id}`}>        
        	<button>View details</button>
        </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProviderOffers;
