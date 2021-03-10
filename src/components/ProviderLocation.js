import React from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../context/auth-context";

function ProviderLocation(props) {
  const company = props.user;
  console.log(company);

  const getLink = (company) => {
    const baseURL = "https://www.google.com/maps/place/";
    const addressURL = company.address;
    const linkToDirections = `${baseURL}${addressURL}`;
    return linkToDirections;
  };
  return (
    <div>
      <Link to={{ pathname: getLink(company) }} target="_blank">
        Directions
      </Link>
    </div>
  );
}

export default withAuth(ProviderLocation);
