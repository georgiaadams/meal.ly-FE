import React from "react";

export default function UserNavbarContent({ logout, name }) {
  return (
    <div>
      <p>{name}</p>
      <button classname="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
