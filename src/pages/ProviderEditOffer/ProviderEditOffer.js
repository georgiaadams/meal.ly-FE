import React, { Component } from "react";
import providerService from "../../services/provider-service";
import { withAuth } from "../../context/auth-context";
import "./ProviderEditOffer.css";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";

class ProviderEditOffer extends Component {
  state = {
    companyName: "",
    content: "",
    quantity: "",
    date: new Date(),
    pickupSlot: "",
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    providerService
      .getOneOfferProvider(id)
      .then((data) => {
        this.setState({ ...data });
      })
      .catch((err) => console.log(err));
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { companyName, content, quantity, date, pickupSlot } = this.state;
    const { id } = this.props.match.params;

    providerService
      .editOffer(id, { companyName, content, quantity, date, pickupSlot })
      .then((data) => {
        this.setState({
          companyName: "",
          content: "",
          quantity: "",
          date: new Date(),
          pickupSlot: "",
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
    const { companyName, content, quantity, date, pickupSlot } = this.state;

    return (
      <div className="edit-offer-form">
        <h2 className="edit-offer-h2">Edit your offer</h2>
        <form className="edit-offer" onSubmit={this.handleFormSubmit}>
          <label>Name of your company:</label>
          <input
            type="text"
            name="companyName"
            value={companyName}
            onChange={this.handleChange}
          />
          <br />
          <label>What kind of food are you giving away?</label>
          <input
            type="text"
            name="content"
            value={content}
            onChange={this.handleChange}
          />
          <br />
          <label>Please specify the amount:</label>
          <input
            type="text"
            name="quantity"
            value={quantity}
            onChange={this.handleChange}
          />
          <br />
          <label>Pickup day:</label>
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
            value={this.state.pickupSlot}
            onChange={this.handleChange}
          >
            <option></option>
            <option>Morning: 9am-12pm</option>
            <option>Afternoon: 12pm-4pm</option>
            <option>Evening: 4pm-8pm</option>
            <option>Night: 8pm-11.30pm</option>
          </select>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <BottomNavbar />
      </div>
    );
  }
}

export default withAuth(ProviderEditOffer);
