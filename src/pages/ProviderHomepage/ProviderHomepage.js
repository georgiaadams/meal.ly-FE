import React from "react";
import { Link } from "react-router-dom";
import "./ProviderHomepage.css";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import providerService from "../../services/provider-service";

class ProviderHomepage extends React.Component {
  state = {
    requestedOffers: [],
  };

  componentDidMount() {
    providerService
      .getAllOffersProvider()
      .then((offers) => {
        const data = offers.filter((offer) => offer.status === "requested");
        console.log(data);
        this.setState({ requestedOffers: data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { requestedOffers } = this.state;
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
          <div key={offer._id}>
            <Link to={`/provider/offers/${offer._id}`}>
              <p>{offer.companyName}</p>
            </Link>
            <p>{offer.content}</p>
            <p>{offer.comments}</p>
            <p>{offer.pickupSlot}</p>
          </div>
        ))}
        <Link to={"/provider/offers"}>
          <button className="offers-panel-button">All my offers</button>
        </Link>
        <BottomNavbar />
      </div>
    );
  }
}

export default ProviderHomepage;
