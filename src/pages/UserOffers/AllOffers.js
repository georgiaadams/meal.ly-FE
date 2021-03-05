import React from "react";
import userService from "../../services/user-service";
import { Link } from "react-router-dom";

class AllOffers extends React.Component {
  state = {
    allOffers: [],
  };

  componentDidMount() {
    userService
      .getOffersUser()
      .then((data) => {
        this.setState({ allOffers: data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { allOffers } = this.state;
    console.log(allOffers);

    return (
      <div>
        {allOffers.map((offers) => {
          return (
            <div key={offers._id}>
              <h2>{offers.companyName}</h2>
              <h3>{offers.address}</h3>
              <h3>{offers.phoneNumber}</h3>
              <Link to={`/user/offer/${offers._id}`}>
                <button>See more</button>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllOffers;
