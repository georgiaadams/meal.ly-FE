import React from "react";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import { withAuth } from "./../../context/auth-context";
import { Link } from "react-router-dom";
import "./ProviderProfile.css";

const ProviderProfile = (props) => {
  const provider = props.user;

  return (
    <div className="provider-profile">
      <h2>My Profile</h2>
      <img width="70px" src={provider.image} alt="profile-img" />
      <p>{provider.companyName}</p>
      <p>{provider.address}</p>
      <p>Phone: {provider.phoneNumber}</p>
      <p>{provider.email}</p>

      <Link to={"/provider/myprofile/edit"}>
        <button className="edit-btn">Edit Details</button>
      </Link>

      <BottomNavbar />
    </div>
  );
};
export default withAuth(ProviderProfile);
