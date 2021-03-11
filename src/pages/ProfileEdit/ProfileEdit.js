import React, { Component } from "react";
import { withAuth } from "../../context/auth-context";
import providerService from "../../services/provider-service";
import "./ProfileEdit.css";

class ProfileEdit extends Component {
  state = {
    companyName: "",
    email: "",
    address: "",
    phoneNumber: undefined,
  };

  componentDidMount() {
    const getProvider = async () => {
      const data = await providerService.getProfile();
      this.setState({ ...data });
    };
    getProvider();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { companyName, email, address, phoneNumber } = this.state;

    providerService
      .editProfile({ companyName, email, address, phoneNumber })
      .then((data) => {
        this.props.updateUser(data);
        this.props.history.push("/provider/myprofile");
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { companyName, email, address, phoneNumber } = this.state;
    return (
      <div className="edit-profile">
        <h2>Edit your profile</h2>
        <br />
        <form onSubmit={this.handleFormSubmit}>
          <label>Company Name</label>
          <br />
          <input
            type="text"
            name="companyName"
            value={companyName}
            onChange={this.handleChange}
          />
          <br />
          <label>Email</label>
          <br />
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <br />
          <label>Address</label>
          <br />
          <input
            type="text"
            name="address"
            value={address}
            onChange={this.handleChange}
          />
          <br />
          <label>Phone Number</label>
          <br />
          <input
            type="number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={this.handleChange}
          />
          <br />

          <button type="submit">Confirm Changes</button>
        </form>
      </div>
    );
  }
}

export default withAuth(ProfileEdit);
