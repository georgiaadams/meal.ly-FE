import React from "react";
import { withAuth } from "./../../context/auth-context";

function Homepage() {
  return (
    <div>
      <h1>I AM THE USER HOMEPAGE</h1>
    </div>
  );
}

export default withAuth(Homepage);
