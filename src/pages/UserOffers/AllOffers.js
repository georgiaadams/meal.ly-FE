import React from "react";
import userService from "../../services/user-service";

class AllOffers extends React.Component {
  state = {
    allOffers: [],
  };

  componentDidMount() {
    userService
      .getOffersUser()
      .then((response) => {
        const data = response.data;
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
          return <p key={offers._id}>{offers.companyName}</p>;
        })}
      </div>
    );
  }
}

export default AllOffers;
