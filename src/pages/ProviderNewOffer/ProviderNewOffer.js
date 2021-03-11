import React, { Component } from "react";
import providerService from "../../services/provider-service";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import "./ProviderNewOffer.css";
import socket from "../../services/sockets/socket";
import { withAuth } from "../../context/auth-context";

class ProviderNewOffer extends Component {
  state = {
    companyName: "",
    content: "",
    quantity: "",
    date: new Date(),
    pickupSlot: "",
    address: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {
      companyName,
      content,
      quantity,
      date,
      pickupSlot,
      address,
    } = this.state;

    providerService
      .createOffer(content, quantity, date, pickupSlot, companyName, address)
      .then((data) => {
        this.setState({
          companyName: "",
          content: "",
          quantity: "",
          date: new Date(),
          pickupSlot: "",
          address: "",
        });
        socket.emit("createOffer", data.data);
        this.props.history.push("/provider/offers");
      })
      .catch((err) => console.log(err));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const providerInfo = this.props.user;
    console.log(providerInfo);
    // const providerInfo = this.props.user;
    const {
      companyName,
      content,
      quantity,
      date,
      pickupSlot,
      address,
    } = this.state;

    return (
      <div className="new-offer-form">
        <form className="new-offer" onSubmit={this.handleFormSubmit}>
          <label>Name of your company:</label>
          <br />
          <input
            type="text"
            name="companyName"
            value={companyName}
            onChange={this.handleChange}
          />
          <br />
          <label>What are you giving away?</label>
          <br />
          <input
            type="text"
            name="content"
            value={content}
            onChange={this.handleChange}
          />
          <br />
          <label>Please specify the amount:</label>
          <br />
          <input
            type="text"
            name="quantity"
            value={quantity}
            onChange={this.handleChange}
          />
          <br />
          <label>Address:</label>
          <br />
          <input
            type="text"
            name="address"
            value={address}
            onChange={this.handleChange}
          />

          <br />
          <label>Pickup day:</label>
          <br />
          <input
            type="date"
            name="date"
            value={date}
            onChange={this.handleChange}
          />
          <br />
          <label>Pickup Slot</label>
          <br />
          <select
            type="text"
            name="pickupSlot"
            value={pickupSlot}
            onChange={this.handleChange}
          >
            <option></option>
            <option>Morning: 9am-12pm</option>
            <option>Afternoon: 12pm-4pm</option>
            <option>Evening: 4pm-8pm</option>
            <option>Night: 8pm-11.30pm</option>
          </select>
          <br />
          <button className="new-offer-button">Submit</button>
        </form>
        <BottomNavbar />
      </div>
    );
  }
}

export default withAuth(ProviderNewOffer);
