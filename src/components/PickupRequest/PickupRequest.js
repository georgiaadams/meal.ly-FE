import React from "react";
import "./PickupRequest.css";
import userService from "../../services/user-service";

class PickupRequest extends React.Component {
  state = {
    pickupSlot: "",
    comments: "",
  };

  handleInput = (event) => {
    let { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { pickupSlot, comments } = this.state;
    const { offerId } = this.props;
    const data = await userService.requestOffer({
      offerId,
      comments,
      pickupSlot,
    });
    console.log(data);
    this.setState({ pickupSlot: "", comments: "" });
  };

  render() {
    const { pickupSlot, comments } = this.state;
    return (
      <div className="pickup-form">
        <form className="user-form" onSubmit={this.handleFormSubmit}>
          <label>Pickup Slot</label>
          <h5>Please let us know an approximate time frame 😊</h5>
          <select
            type="text"
            name="pickupSlot"
            value={pickupSlot}
            onChange={this.handleInput}
          >
            <option>Morning: 9am-12pm</option>
            <option>Afternoon: 12pm-5pm</option>
            <option>Evening: 5pm-11pm</option>
          </select>

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

export default PickupRequest;
