import React from "react";
import { Link } from "react-router-dom";
import "./ProviderHomepage.css";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import providerService from "../../services/provider-service";

const ProviderHomepage = () => {
  const [requestedOffers, setRequestedOffers] = React.useState([]);

  React.useEffect(() => {
    async function getOffers() {
      const offers = await providerService.getAllOffersProvider();
      const data = offers.filter((offer) => offer.status === "requested");
      setRequestedOffers(data);
    }
    getOffers();
  }, []);

  console.log("requested", requestedOffers);
  return (
    <div className="provider-home">
      <img
        className="care-icon"
        src="https://res.cloudinary.com/skillbees/image/upload/v1615127951/Meal.ly/love_louyw3.png"
        alt="care-icon"
      />
      <Link to={"/provider/offers/new"}>
        <button className="add-new-offer">Add a new offer</button>
      </Link>
      <h3>Your requested offers:</h3>
      {requestedOffers.map((offer) => (
        <p>{offer.comments}</p>
      ))}
      <Link to={"/provider/offers"}>
        <button className="offers-panel-button">All my offers</button>
      </Link>
      <BottomNavbar />
    </div>
  );
};

export default ProviderHomepage;
