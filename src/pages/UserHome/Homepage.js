import React from "react";
import { withAuth } from "./../../context/auth-context";
import { Link } from "react-router-dom";
import OfferCard from "../../components/OfferCard/OfferCard";
import RequestedOffers from "../../components/RequestedOffers/RequestedOffers";
import "./Homepage.css";
function Homepage() {
  return (
    <div className="homepage">
      <h2>All Offers</h2>
      <Link to={"/user/offers"}>See all new offers</Link>
      <OfferCard />

      <RequestedOffers />
      <Link to={"/user/offers/pending"}>
        <button>See all requests</button>
      </Link>
    </div>
  );
}

export default withAuth(Homepage);
