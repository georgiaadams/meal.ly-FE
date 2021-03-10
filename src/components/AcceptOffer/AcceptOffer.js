import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import providerService from "../../services/provider-service";
import socket from "../../services/sockets/socket";

class AcceptOffer extends Component {
  handleClick = async (event) => {
    console.log("clicked");
    const offerId = this.props.match.params.id;
    const offer = await providerService.acceptOffer({ offerId });
    socket.emit("acceptOffer", { offer });
    this.props.history.push("/provider/offers");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Accept pickup </button>
      </div>
    );
  }
}

export default withRouter(AcceptOffer);
