import React, { Component } from 'react';
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import { withAuth } from "./../../context/auth-context";
import "./ProviderProfile.css";


class ProviderProfile extends Component {



    render() {
        const details = this.props;
        return (
            <div className="provider-profile">
            <p>Company name:</p>
            <p>{details.user.companyName}</p>
            <p>Address: </p>
            <p>{details.user.address}</p>
            <p>Phone: </p>
            <p>{details.user.phoneNumber}</p>
            <p>Email: </p>
            <p>{details.user.email}</p>
            

            

                <BottomNavbar /> 
            </div>
        )
    }
}

export default withAuth(ProviderProfile);
