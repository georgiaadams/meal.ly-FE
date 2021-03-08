import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import providerService from "../../services/provider-service";


class AcceptOffer extends Component {

    handleClick = async (event) => {
                const offerId = this.props.match.params.id;
                const data = await providerService.acceptOffer({offerId});
                console.log(data);
                this.props.history.push("/provider/offers");
                
            }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Accept pickup </button>
            </div>
        )
    }
}


export default withRouter(AcceptOffer);

