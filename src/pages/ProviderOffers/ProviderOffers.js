import providerService from "../../services/provider-service";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import "./ProviderOffers.css";
import moment from "moment";
import socket from "../../services/sockets/socket";

class ProviderOffers extends Component {
  state = {
    offers: [],
  };

  componentDidMount() {
    this.getAllOffers();
    socket.on("offerCollected", () => this.getAllOffers());
  }
  getAllOffers = () => {
    providerService
      .getAllOffersProvider()
      .then((data) => {
        this.setState({ offers: data });
      })
      .catch((err) => console.log(err));
  };

  


  render() {
    const displayOffers = () => {
      if (this.state.offers.length !== 0) {
        return (
            <div className="offer">
              {this.state.offers.map((offer) => {
                return (
                  <div className="provider-offer-details">
                    <div key={offer._id}>
                      <h3>{offer.content}</h3>
                      <p>
                        <img
                          className="offer-icon"
                          src="https://res.cloudinary.com/skillbees/image/upload/v1615134623/Meal.ly/healthy-food_jf07wc.png"
                          alt="bowl-icon"
                        />{" "}
                        {offer.quantity}
                      </p>
                      <p>
                        <img
                          className="offer-icon"
                          src="https://res.cloudinary.com/skillbees/image/upload/v1615134623/Meal.ly/clock_snwysd.png"
                          alt="clock-icon"
                        />{" "}
                        Pickup time: {offer.pickupSlot}
                      </p>
                      <p>
                        <img
                          className="offer-icon"
                          src="https://res.cloudinary.com/skillbees/image/upload/v1615134623/Meal.ly/calendar_hhbgvr.png"
                          alt="calendar-icon"
                        />{" "}
                        Pickup day: {moment(offer.date).format("LL")};
                      </p>
                      <p>
                        <img
                          className="offer-icon"
                          src="https://res.cloudinary.com/skillbees/image/upload/v1615134623/Meal.ly/charging-circle_p7sls6.png"
                          alt="status-icon"
                        />{" "}
                        Status: {offer.status}
                      </p>
                      <Link to={`/provider/offers/${offer._id}`}>
                        <button className="view-details">View details</button>
                      </Link>
                    </div>
                  </div>
                );
              })}
              <BottomNavbar />
            </div>
        )
      } else {
        return (
          <div className="nothing-to-display">
          <h2 className="no-offers">You have no offers to show!</h2>
          <img className="empty-box" src="https://res.cloudinary.com/skillbees/image/upload/v1615465412/Meal.ly/box_1_dvgeh1.png"/>
          </div>
        )
      }
    }
  
    return (
      <div>
      {displayOffers()}
      <BottomNavbar />
      </div>
    )
    
  
  }
}

export default ProviderOffers;
