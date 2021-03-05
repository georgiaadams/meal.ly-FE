import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import UserSignup from "./pages/Signup/UserSignup";
import Login from "./pages/Login/Login";
import UserLogin from "./pages/Login/UserLogin";
import Private from "./pages/Private/Private";

import ProviderHomepage from "./pages/ProviderHomepage/ProviderHomepage";
import ProviderEditOffer from "./pages/ProviderEditOffer/ProviderEditOffer";
import ProviderNewOffer from "./pages/ProviderNewOffer/ProviderNewOffer";
import ProviderOfferDetails from "./pages/ProviderOfferDetails/ProviderOfferDetails";
import ProviderRequests from "./pages/ProviderRequests/ProviderRequests";

// Components
// import Navbar from "./components/Navbar/Navbar";

import AnonRoute from "./components/AnonRoute/AnonRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import UserNavbar from "./components/Navbar/UserNavbar";

class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <Navbar /> */}
        <UserNavbar />

        <Switch>
          <Route exact path="/" component={Home} />

          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />
          <AnonRoute exact path="/user/signup" component={UserSignup} />
          <AnonRoute exact path="/user/login" component={UserLogin} />

          <PrivateRoute exact path="/private" component={Private} />
          <PrivateRoute
            exact
            path="/provider/homepage"
            component={ProviderHomepage}
          />
          <PrivateRoute
            exact
            path="/provider/offers/new"
            component={ProviderNewOffer}
          />
          <PrivateRoute
            exact
            path="/provider/offers/:id"
            component={ProviderOfferDetails}
          />
          <PrivateRoute
            exact
            path="/provider/offers/edit/:id"
            component={ProviderEditOffer}
          />
          <PrivateRoute
            exact
            path="/provider/offers"
            component={ProviderRequests}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
