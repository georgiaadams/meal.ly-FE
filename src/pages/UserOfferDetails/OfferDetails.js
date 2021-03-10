import React, { Component } from "react";
import userService from "../../services/user-service";
// import { withAuth } from "../../context/auth-context";
import PickupRequest from "../../components/PickupRequest/PickupRequest";
import "./OfferDetails.css";
import UserBottomNavbar from "../../components/BottomNavbar/UserBottomNavbar";
import ProviderLocation from "../../components/ProviderLocation";
// import mapboxgl from "mapbox-gl";

class OfferDetails extends Component {
  state = {
    oneOffer: [],
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    userService
      .getOneOfferUser(id)
      .then((data) => {
        console.log(data);
        // const location = data.location.coordinates.reverse();
        this.setState({ oneOffer: data });
        // this.displayMap(location);
      })
      .catch((err) => console.log(err));
  }

  // displayMap = (locationArr) => {
  //   const center = locationArr ? locationArr : [2.0787281, 41.3948976];
  //   mapboxgl.accessToken =
  //     "pk.eyJ1IjoiZ2VvcmdpYWFkYW1zIiwiYSI6ImNrbTJheXB6NTF1bnAyeGx5ajVsZWtjMmUifQ.-8_58oOQJ2bf8oHKyKWt7Q";
  //   const map = new mapboxgl.Map({
  //     container: "map", // container ID
  //     style: "mapbox://styles/mapbox/streets-v11", // style URL
  //     center: center, // starting position [lng, lat]
  //     zoom: 14, // starting zoom
  //   });

  //   new mapboxgl.Marker().setLngLat(center).addTo(map);
  // };

  render() {
    const { oneOffer } = this.state;

    return (
      <div>
        {/* <div id="map" style={{ width: "300px", height: "400px" }}></div> */}
        <div className="offer-details">
          <div className="offer-header">
            <h2>Offer Details</h2>
          </div>
          <img
            width="150px"
            style={{ borderRadius: "15px" }}
            src={oneOffer.image}
            alt="offer-img"
          />
          <div className="offer-info">
            <p>Company: {oneOffer.companyName}</p>
            <p>Content: {oneOffer.content}</p>
            <p>
              Quantity: {oneOffer.quantity} | Pickup: {oneOffer.pickupSlot}
            </p>
            <ProviderLocation />
          </div>
          <hr />
          <h4>Pickup Request</h4>
          {oneOffer.status !== "new" ? (
            <>
              <div>You have requested this offer already</div>
            </>
          ) : (
            <>
              <PickupRequest />
            </>
          )}
        </div>
        <UserBottomNavbar />
      </div>
    );
  }
}

export default OfferDetails;
