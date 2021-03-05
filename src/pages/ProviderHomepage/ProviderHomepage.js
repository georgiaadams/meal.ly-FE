import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProviderHomepage extends Component {
  render() {
    return (
      <div>
        <h1>I am the provider homepage</h1>
        <Link to={"/provider/offers/new"}>
          <button>Add a new offer</button>
        </Link>
        <h2>Your pending offers:</h2>
        <Link to={"/provider/offers"}>
          <button>Offers panel</button>
        </Link>
      </div>
    );
  }
}

export default ProviderHomepage;
