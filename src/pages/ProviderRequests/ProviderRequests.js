import providerService from "../../services/provider-service";
import React, { Component } from "react";

class ProviderRequests extends Component {
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
              <h1>{offer.companyName}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProviderRequests;
