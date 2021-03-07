import React from "react";
import "./PickupRequest.css";

class PickupRequest extends React.Component {
  state = {
    pickupSlot: "",
    comments: "",
  };

  handleInput = (event) => {
    let { value, name } = event.target;
    this.setState({ [name]: value });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    const newRequest = this.state;
    this.props.PickupRequest = newRequest;
    this.setState({ pickupSlot: "", comments: "" });
  };

  render() {
    const { pickupSlot, comments } = this.state;
    return (
      <div className="pickup-form">
        <form onSubmit={this.handleFormSubmit}>
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
