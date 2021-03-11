import React from "react";
import { withAuth } from "./../../context/auth-context";
import { Link } from "react-router-dom";
import OfferCard from "../../components/OfferCard/OfferCard";
import RequestedOffers from "../../components/RequestedOffers/RequestedOffers";
import "./Homepage.css";
import UserBottomNavbar from "../../components/BottomNavbar/UserBottomNavbar";

function Homepage() {
  return (
    <div>
    <div className="homepage">
    <h2><img className="bowl-icon" src="https://res.cloudinary.com/skillbees/image/upload/v1615134623/Meal.ly/healthy-food_jf07wc.png"/> Latest Offers</h2>
      <Link to={"/user/offers"}><button className="all-new-offers">See all new offers</button></Link>
      <OfferCard />

      <RequestedOffers />
      <Link to={"/user/offers/pending"}>
        <button>See all requests</button>
      </Link>
      </div>
      <UserBottomNavbar />
     
    </div>
    
  );
}

export default withAuth(Homepage);
