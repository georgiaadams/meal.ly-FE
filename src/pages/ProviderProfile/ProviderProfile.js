import React, { Component } from "react";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import { withAuth } from "./../../context/auth-context";
import "./ProviderProfile.css";

const ProviderProfile = (props) => {
  const provider = props.user;

  return (
    <div className="provider-profile">
      <h2>My Profile</h2>
      <p>{provider.companyName}</p>
      <p>{provider.address}</p>
      <p>Phone: {provider.phoneNumber}</p>
      <p>{provider.email}</p>

      <button>Delete Account</button>
      <BottomNavbar />
    </div>
  );
};
export default withAuth(ProviderProfile);
