import React, { Component } from "react";
import providerService from "../../services/provider-service";
import { withAuth } from "../../context/auth-context";

class ProviderEditOffer extends Component {
  state = {
    companyName: "",
    content: "",
    quantity: "",
    date: new Date().toISOString().substr(0, 10),
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
      <div>
        <h1>Edit your offer</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name of your company:</label>
          <input
            type="text"
            name="companyName"
            value={this.state.companyName}
            onChange={this.handleChange}
          />
          <br />
          <label>What kind of food are you giving away?</label>
          <input
            type="text"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <br />
          <label>Please specify the amount:</label>
          <input
            type="text"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
          <br />
          <label>Pickup day:</label>
          <input
            type="date"
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
          <br />
          <label>Pickup time:</label>
          <input
            type="time"
            name="pickupSlot"
            value={this.state.pickupSlot}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default withAuth(ProviderEditOffer);
