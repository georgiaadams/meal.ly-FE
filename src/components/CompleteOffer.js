import React from "react";
import { withRouter } from "react-router-dom";
import socket from "../services/sockets/socket";
import userService from "../services/user-service";

class CompleteOffer extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleClick}>Collected</button>
      </div>
    );
  }
}

export default withRouter(CompleteOffer);
