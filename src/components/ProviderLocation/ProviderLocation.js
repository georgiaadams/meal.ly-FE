import React from "react";
import { Link } from "react-router-dom";
import "./ProviderLocation.css";

function ProviderLocation(props) {
  const companyDetails = props;

  const getLink = (companyDetails) => {
    const baseURL = "https://www.google.com/maps/place/";
    const addressURL = companyDetails.address;
    const linkToDirections = `${baseURL}${addressURL}`;
    return linkToDirections;
  };
  return (
    <div className="location">
      <Link to={{ pathname: getLink(companyDetails) }} target="_blank">
        <button>Directions</button>
      </Link>
    </div>
  );
}

export default ProviderLocation;
