import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../services/user-service";
import moment from "moment";

class RequestedOffers extends Component {
  state = {
    pendingOffers: [],
  };

  componentDidMount() {
    userService.getPendingOffersUser().then(({ requested }) => {
      this.setState({ pendingOffers: requested });
    });
  }
  render() {
    const { pendingOffers } = this.state;
    return (
      <div>
        <h2>Your Requested Offers</h2>
        {pendingOffers.map((pendingOffer) => {
          return (
            <div className="requested-offer-div">
              <Link to={`/user/offers/${pendingOffer._id}`}>
                <p style={{ margin: "0" }}>
                  <img
                    className="offer-icon"
                    src="https://res.cloudinary.com/skillbees/image/upload/v1615452522/Meal.ly/food-stall_irwffa.png"
                    alt="company-img"
                  />{" "}
                  {pendingOffer.companyName}
                </p>
              </Link>
              <p>
                <img
                  className="offer-icon"
                  src="https://res.cloudinary.com/skillbees/image/upload/v1615134623/Meal.ly/healthy-food_jf07wc.png"
                  alt="food-img"
                />{" "}
                {pendingOffer.content}
              </p>
              <p>
                <img
                  className="offer-icon"
                  src="https://res.cloudinary.com/skillbees/image/upload/v1615134623/Meal.ly/clock_snwysd.png"
                  alt="clock-icon"
                />{" "}
                {pendingOffer.pickupSlot}
              </p>
              <p>
                <img
                  className="offer-icon"
                  src="https://res.cloudinary.com/skillbees/image/upload/v1615134623/Meal.ly/calendar_hhbgvr.png"
                  alt="calendar-icon"
                />{" "}
                {moment(pendingOffer.date).format("LL")}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default RequestedOffers;
