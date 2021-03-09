import React from "react";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import { withAuth } from "./../../context/auth-context";
import "./ProviderProfile.css";

const ProviderProfile = (props) => {
  const provider = props.user;

  return (
    <div>
      <h2>My Profile</h2>
      <img width="70px" src={provider.image} alt="userImg" />
      <p>{provider.companyName}</p>
      <p>{provider.address}</p>
      <p>{provider.email}</p>

      <button>Delete Account</button>
      <BottomNavbar />
    </div>
  );
};
export default withAuth(ProviderProfile);
