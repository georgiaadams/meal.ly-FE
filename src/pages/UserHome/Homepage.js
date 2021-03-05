import React from "react";
import { withAuth } from "./../../context/auth-context";
import { Link } from "react-router-dom";
import OfferCard from "../../components/OfferCard/OfferCard";
import RequestedOffers from "../../components/RequestedOffers/RequestedOffers";
function Homepage() {
  return (
    <div>
      <h1> USER HOMEPAGE</h1>
      <OfferCard />
      <Link to={"/user/offers"}>
        <button>See all new offers</button>
      </Link>
      <RequestedOffers />
      <Link to={"/user/offers/pending"}>
        <button>See all requests</button>
      </Link>
    </div>
  );
}

export default withAuth(Homepage);
