import React from "react";
import { Link } from "react-router-dom";

function ProviderLocation(props) {
  const companyDetails = props;

  const getLink = (companyDetails) => {
    const baseURL = "https://www.google.com/maps/place/";
    const addressURL = companyDetails.address;
    const linkToDirections = `${baseURL}${addressURL}`;
    return linkToDirections;
  };
  return (
    <div>
      <Link to={{ pathname: getLink(companyDetails) }} target="_blank">
        Directions
      </Link>
    </div>
  );
}

export default ProviderLocation;
