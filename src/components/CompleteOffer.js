import React from "react";
import { withRouter } from "react-router-dom";
import userService from "../services/user-service";

class CompleteOffer extends React.Component {
  handleClick = async (event) => {
    const { offerId } = this.props;
    const data = await userService.completeOffer({ offerId });
    console.log(data);
    this.props.history.push("/user/offers/completed");
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Collected</button>
      </div>
    );
  }
}

export default withRouter(CompleteOffer);
