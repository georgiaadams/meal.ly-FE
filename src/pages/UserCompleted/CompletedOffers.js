import React, { Component } from "react";
import userService from "../../services/user-service";
import UserBottomNavbar from "../../components/BottomNavbar/UserBottomNavbar";
import "./CompletedOffers.css";
import moment from "moment";

class CompletedOffers extends Component {
  state = {
    completedOffers: [],
  };

  componentDidMount() {
    userService
      .getCompletedOffersUser()
      .then((offers) => {
        console.log(offers);
        const data = offers.filter((offer) => offer.status === "completed");
        this.setState({ completedOffers: data });
      })
      .catch((err) => console.log(err));
  }

 

  render() {
    const { completedOffers } = this.state;
    return (
      <div>
        <div className="user-completed-offers">
          <h2>Your Completed Orders</h2>
          {completedOffers.map((offer) => (
            <div key={offer._id}>
              <p>
                <img
                  className="offer-icon"
                  src="https://res.cloudinary.com/skillbees/image/upload/v1615452522/Meal.ly/food-stall_irwffa.png"
                  alt="company-img"
                />{" "}
                {""}
                {offer.companyName}
              </p>
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
                  src="https://res.cloudinary.com/skillbees/image/upload/v1615134623/Meal.ly/calendar_hhbgvr.png"
                  alt="calendar-icon"
                />{" "}
                {moment(offer.date).format("LL")}
              </p>
              <p>
                <img
                  className="offer-icon"
                  src="https://res.cloudinary.com/skillbees/image/upload/v1615134623/Meal.ly/charging-circle_p7sls6.png"
                  alt="status-icon"
                />{" "}
                {offer.status}
              </p>
              <hr />
            </div>
          ))}
        </div>
        <UserBottomNavbar />
      </div>
    );
  }
}

export default CompletedOffers;
