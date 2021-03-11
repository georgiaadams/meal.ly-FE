import React from "react";
import userService from "../../services/user-service";
import { Link } from "react-router-dom";
import "../../components/OfferCard/OfferCard.css";
import "./AllOffers.css";
import socket from "../../services/sockets/socket";
import UserBottomNavbar from "../../components/BottomNavbar/UserBottomNavbar";

class AllOffers extends React.Component {
  state = {
    allOffers: [],
  };

  componentDidMount() {
    this.getAllOffers();
    socket.on("newOffer", (newOffer) => {
      console.log("I AM A NEW OFFER", newOffer);

      this.setState({ allOffers: [newOffer, ...this.state.allOffers] });
    });
  }

  getAllOffers = () => {
    userService
      .getOffersUser()
      .then((data) => {
        this.setState({ allOffers: data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { allOffers } = this.state;
    console.log(allOffers);

    return (
      <div>
        <div className="all-offers">
          <h2>
            <img
              className="bowl-icon"
              src="https://res.cloudinary.com/skillbees/image/upload/v1615134623/Meal.ly/healthy-food_jf07wc.png"
            />{" "}
            All Offers
          </h2>
          {allOffers.map((offers) => {
            return (
              <div className="offer-card" key={offers._id}>
                <div className="offer-info">
                  <p>
                    <img
                      className="offer-icon"
                      src="https://res.cloudinary.com/skillbees/image/upload/v1615452522/Meal.ly/food-stall_irwffa.png"
                    />
                    {offers.companyName}
                  </p>
                  <p>
                    <img
                      className="offer-icon"
                      src="https://res.cloudinary.com/skillbees/image/upload/v1615452522/Meal.ly/box_ifs7rr.png"
                    />
                    {offers.quantity}
                  </p>
                  <p>
                    <img
                      className="offer-icon"
                      src="https://res.cloudinary.com/skillbees/image/upload/v1615134623/Meal.ly/healthy-food_jf07wc.png"
                    />{" "}
                    {offers.content}
                  </p>
                </div>
                <div>
                  <img width="80px" src={offers.image} alt="offerimg" />
                  <Link to={`/user/offers/${offers._id}`}>
                    <button className="seemore">See more</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <UserBottomNavbar />
      </div>
    );
  }
}

export default AllOffers;
