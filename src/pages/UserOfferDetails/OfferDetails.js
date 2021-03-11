import React, { Component } from "react";
import userService from "../../services/user-service";
// import { withAuth } from "../../context/auth-context";
import PickupRequest from "../../components/PickupRequest/PickupRequest";
import "./OfferDetails.css";
import UserBottomNavbar from "../../components/BottomNavbar/UserBottomNavbar";
import ProviderLocation from "../../components/ProviderLocation/ProviderLocation";

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
            <p>
              <img
                className="offer-icon"
                src="https://res.cloudinary.com/skillbees/image/upload/v1615452522/Meal.ly/food-stall_irwffa.png"
                alt="company-img"
              />{" "}
              {oneOffer.companyName}
            </p>
            <p>
              <img
                className="offer-icon"
                src="https://res.cloudinary.com/skillbees/image/upload/v1615134623/Meal.ly/healthy-food_jf07wc.png"
                alt="food-img"
              />{" "}
              {oneOffer.content}
            </p>
            <p>
              <img
                className="offer-icon"
                src="https://res.cloudinary.com/skillbees/image/upload/v1615452522/Meal.ly/box_ifs7rr.png"
                alt="quantity-img"
              />{" "}
              {oneOffer.quantity}
            </p>
            <p>
              <img
                className="offer-icon"
                src="https://res.cloudinary.com/skillbees/image/upload/v1615134623/Meal.ly/clock_snwysd.png"
                alt="time-img"
              />{" "}
              {oneOffer.pickupSlot}
            </p>
            <p>
              <img
                className="offer-icon"
                src="https://res.cloudinary.com/skillbees/image/upload/v1615455306/Meal.ly/placeholder_lczeom.png"
                alt="address-img"
              />
              {oneOffer.address}
            </p>
            <ProviderLocation address={oneOffer.address} />
          </div>
          <hr />
          <h4>Pickup Request</h4>
          {oneOffer.status !== "new" ? (
            <>
              <div className="requested-message">
                <img
                  style={{ width: "40px" }}
                  src="https://res.cloudinary.com/skillbees/image/upload/v1615455081/Meal.ly/checked_ejbio8.png"
                  alt="waiting-img"
                />
                <p>You have requested this offer already</p>
              </div>
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
