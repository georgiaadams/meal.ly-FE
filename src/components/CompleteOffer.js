import React from "react";
import { withRouter } from "react-router-dom";

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
