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
import UserHome from "./pages/UserHome/Homepage";
import UserCompleted from "./pages/UserCompleted/CompletedOffers";
import UserOfferDetails from "./pages/UserOfferDetails/OfferDetails";
import UserOffers from "./pages/UserOffers/AllOffers";
import UserRequests from "./pages/UserRequests/UserRequests";

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
          <PrivateRoute exact path="/user/homepage" component={UserHome} />
          <PrivateRoute exact path="/user/offers" component={UserOffers} />
          <PrivateRoute
            exact
            path="/user/offers/:id"
            component={UserOfferDetails}
          />
          <PrivateRoute
            exact
            path="/user/offers/pending"
            component={UserRequests}
          />
          <PrivateRoute
            exact
            path="/user/offers/completed"
            component={UserCompleted}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
