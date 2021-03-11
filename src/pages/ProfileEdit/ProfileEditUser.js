import React, { Component } from "react";
import { withAuth } from "../../context/auth-context";
import userService from "../../services/user-service";
import "./ProfileEdit.css";

class ProfileEditUser extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
  };
  componentDidMount() {
    const getUser = async () => {
      const data = await userService.getProfile();
      this.setState({ ...data });
    };
    getUser();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email } = this.state;

    userService.editProfile({ firstName, lastName, email }).then((data) => {
      this.props.updateUser(data);
      this.props.history.push("/user/profile");
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { firstName, lastName, email } = this.state;
    return (
      <div className="edit-profile">
        <h2>Edit your profile</h2>
        <br />
        <form onSubmit={this.handleFormSubmit}>
          <label>Firstname</label>
          <br />
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
          <br />
          <label>Lastname</label>
          <br />
          <input
            type="text"
            name="lastName"
            value={lastName}
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
          <button type="submit">Confirm Changes</button>
        </form>
      </div>
    );
  }
}

export default withAuth(ProfileEditUser);
