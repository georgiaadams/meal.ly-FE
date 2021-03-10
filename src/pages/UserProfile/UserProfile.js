import React from "react";
import { withAuth } from "../../context/auth-context";
import "./UserProfile.css";
import UserBottomNavbar from "../../components/BottomNavbar/UserBottomNavbar";

const UserProfile = (props) => {
  const user = props.user;

  return (
    <div className="profile-page">
      <h2>My Profile</h2>
      <img width="70px" src={user.image} alt="userImg" />
      <p>
        Name: {user.firstName} {user.lastName}
      </p>
      <p>Email: {user.email}</p>

      <button className="edit-btn">Edit Details</button>
      <br />
      <button className="delete-btn">Delete Account</button>
      <UserBottomNavbar />
    </div>
  );
};

export default withAuth(UserProfile);
