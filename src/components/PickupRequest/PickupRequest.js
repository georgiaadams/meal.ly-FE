import React from "react";
import "./PickupRequest.css";
import userService from "../../services/user-service";
import socket from "../../services/sockets/socket";
import { withRouter } from "react-router-dom";

class PickupRequest extends React.Component {
  state = {
    username: "",
    comments: "",
  };

  handleInput = (event) => {
    let { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { username, comments } = this.state;
    console.log(this.props);

    const offerId = this.props.match.params.id;

    const { companyName } = await userService.requestOffer({
      offerId,
      comments,
      username,
    });
    this.props.history.push("/user/offers/pending");
    socket.emit("requestOffer", { companyName });
    this.setState({ username: "", comments: "" });
  };

  render() {
    const { username, comments } = this.state;
    return (
      <div className="pickup-form">
        <form className="user-form" onSubmit={this.handleFormSubmit}>
          <label>Name</label>
          <h5>Please let us know who will come to collect 😊</h5>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleInput}
          />

          <br />

          <label>Comments</label>
          <input
            type="text"
            name="comments"
            value={comments}
            onChange={this.handleInput}
            placeholder="Leave any comments here"
          />
          <br />
          <button>Request</button>
        </form>
      </div>
    );
  }
}

export default withRouter(PickupRequest);
