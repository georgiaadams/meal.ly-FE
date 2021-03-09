import React from "react";
import { withAuth } from "../../context/auth-context";

const UserProfile = (props) => {
  const user = props.user;

  return (
    <div>
      <h2>My Profile</h2>
      <img width="70px" src={user.image} alt="userImg" />
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.email}</p>

      <button>Delete Account</button>
    </div>
  );
};

export default withAuth(UserProfile);
