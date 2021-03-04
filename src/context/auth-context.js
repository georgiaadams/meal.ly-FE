import React from "react";
import authService from "../services/auth-service";

const { Consumer, Provider } = React.createContext();

class AuthProvider extends React.Component {
  state = {
    isLoggedIn: false,
    isLoading: true,
    user: null,
  };

  componentDidMount() {
    authService
      .me()
      .then((user) =>
        this.setState({ isLoggedIn: true, user: user, isLoading: false })
      )
      .catch((err) =>
        this.setState({ isLoggedIn: false, user: null, isLoading: false })
      );
  }

  userSignup = (firstName, lastName, email, password) => {
    authService
      .userSignup(firstName, lastName, email, password)
      .then((user) => this.setState({ isLoggedIn: true, user }))
      .catch((err) => {
        this.setState({ isLoggedIn: false, user: null });
      });
  };

  userLogin = (email, password) => {
    authService
      .userLogin(email, password)
      .then((user) => this.setState({ isLoggedIn: true, user }))
      .catch((err) => {
        this.setState({ isLoggedIn: false, user: null });
      });
  };

  providerSignup = (companyName, address, phoneNumber, email, password) => {
    authService
      .providerSignup(companyName, address, phoneNumber, email, password)
      .then((user) => this.setState({ isLoggedIn: true, user }))
      .catch((err) => {
        this.setState({ isLoggedIn: false, user: null });
      });
  };

  providerLogin = (email, password) => {
    authService
      .providerLogin(email, password)
      .then((user) => this.setState({ isLoggedIn: true, user }))
      .catch((err) => {
        this.setState({ isLoggedIn: false, user: null });
      });
  };

  logout = () => {
    authService
      .logout()
      .then(() => this.setState({ isLoggedIn: false, user: null }))
      .catch((err) => console.log(err));
  };

  render() {
    const { isLoggedIn, isLoading, user } = this.state;
    const {
      userSignup,
      userLogin,
      providerSignup,
      providerLogin,
      logout,
    } = this;

    if (isLoading) return <p>Loading</p>;

    return (
      <Provider
        value={{
          isLoggedIn,
          isLoading,
          user,
          userSignup,
          userLogin,
          providerSignup,
          providerLogin,
          logout,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

// HOC that converts regular component into a Consumer
const withAuth = (WrappedComponent) => {
  return function (props) {
    return (
      <Consumer>
        {(value) => {
          const {
            isLoggedIn,
            isLoading,
            user,
            userSignup,
            userLogin,
            providerSignup,
            providerLogin,
            logout,
          } = value;

          return (
            <WrappedComponent
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
              user={user}
              userSignup={userSignup}
              userLogin={userLogin}
              providerSignup={providerSignup}
              providerLogin={providerLogin}
              logout={logout}
              {...props}
            />
          );
        }}
      </Consumer>
    );
  };
};

export { AuthProvider, withAuth };
