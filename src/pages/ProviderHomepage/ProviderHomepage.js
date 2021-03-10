import React from "react";
import { Link } from "react-router-dom";
import "./ProviderHomepage.css";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import providerService from "../../services/provider-service";
import socketIOClient from "socket.io-client";
import { withAuth } from "../../context/auth-context";
const ENDPOINT = process.env.REACT_APP_API_URL;

class ProviderHomepage extends React.Component {
  state = {
    requestedOffers: [],
  };

  componentDidMount() {
    const socket = socketIOClient(ENDPOINT);
    this.getRequestedOffers();
    socket.on("offerRequested", (data) => {
      const {
        user: { companyName },
      } = this.props;
      if (data.companyName === companyName) {
        this.getRequestedOffers();
      }
    });
  }
  getRequestedOffers = () => {
    providerService
      .getAllOffersProvider()
      .then((offers) => {
        const data = offers.filter((offer) => offer.status === "requested");
        console.log(data);
        this.setState({ requestedOffers: data });
      })
      .catch((err) => console.log(err));
  };
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
          <div className="provider-hp-offers" key={offer._id}>
            <p>
              <img
                className="offer-icon"
                src="https://res.cloudinary.com/skillbees/image/upload/v1615134623/Meal.ly/healthy-food_jf07wc.png"
                alt="food-img"
              />{" "}
              {offer.content}
            </p>
            <p>
              <img
                className="offer-icon"
                src="https://res.cloudinary.com/skillbees/image/upload/v1615325955/Meal.ly/messenger_c959rr.png"
                alt="messaging-img"
              />{" "}
              Message: {offer.comments}
            </p>
            <p>
              <img
                className="offer-icon"
                src="https://res.cloudinary.com/skillbees/image/upload/v1615134623/Meal.ly/clock_snwysd.png"
                alt="time-img"
              />{" "}
              Pickup time: {offer.pickupSlot}
            </p>
            <Link to={`/provider/offers/${offer._id}`}>
              <p>
                Accept pickup{" "}
                <img
                  className="offer-icon"
                  src="https://res.cloudinary.com/skillbees/image/upload/v1615381281/Meal.ly/confirmation_vucm8r.png"
                  alt="confirm-img"
                />
              </p>
            </Link>
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

export default withAuth(ProviderHomepage);
