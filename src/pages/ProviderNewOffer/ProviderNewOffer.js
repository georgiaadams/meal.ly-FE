import React, { Component } from "react";
import providerService from "../../services/provider-service";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import "./ProviderNewOffer.css";

class ProviderNewOffer extends Component {
  state = {
    companyName: "",
    content: "",
    quantity: "",
    date: new Date(),
    pickupSlot: "",
    image: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {
      content,
      quantity,
      date,
      pickupSlot,
      companyName,
      image,
    } = this.state;
    providerService
      .createOffer(content, quantity, date, pickupSlot, companyName, image)
      .then((data) => {
        console.log(data);
        this.setState({
          companyName: "",
          content: "",
          quantity: "",
          date: new Date(),
          pickupSlot: "",
          image: "",
        });
        this.props.history.push("/provider/offers");
      })
      .catch((err) => console.log(err));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="new-offer-form">
        <form className="new-offer" onSubmit={this.handleFormSubmit}>
          <label>Name of your company:</label>
          <br />
          <input
            type="text"
            name="companyName"
            value={this.state.companyName}
            onChange={this.handleChange}
          />
          <br />
          <label>What kind of food are you giving away?</label>
          <br />
          <input
            type="text"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <br />
          <label>Please specify the amount:</label>
          <br />
          <input
            type="text"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
          <br />
          <label>Pickup day:</label>
          <br />
          <input
            type="date"
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
          <br />
          <label>Pickup time:</label>
          <br />
          <input
            type="time"
            name="pickupSlot"
            value={this.state.pickupSlot}
            onChange={this.handleChange}
          />
          <br />
          {/* <label>Pickup Slot</label>
          <br />
          <select
            type="text"
            name="pickupSlot"
            value={this.state.pickupSlot}
            onChange={this.handleChange}
          >
            <option>Morning: 9am-12pm</option>
            <option>Afternoon: 12pm-4pm</option>
            <option>Evening: 4pm-8pm</option>
            <option>Night: 8pm-11.30pm</option>
          </select> */}
          <br />
          <button className="new-offer-button">Submit</button>
        </form>
        <BottomNavbar />
      </div>
    );
  }
}

export default ProviderNewOffer;
