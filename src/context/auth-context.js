import React from "react";
import authService from "../services/auth-service";

const { Consumer, Provider } = React.createContext();

class AuthProvider extends React.Component {
  state = {
    isLoggedIn: false,
    isLoading: true,
    user: null,
    isProviderUser: false,
  };

  componentDidMount() {
    authService
      .me()
      .then((user) => {
        const isProviderUser = !!user.companyName;
        this.setState({
          isLoggedIn: true,
          user: user,
          isLoading: false,
          isProviderUser,
        });
      })
      .catch((err) =>
        this.setState({
          isLoggedIn: false,
          user: null,
          isLoading: false,
          isProviderUser: false,
        })
      );
  }

  userSignup = (firstName, lastName, email, password) => {
    return authService
      .userSignup(firstName, lastName, email, password)
      .then((user) => {
        const isProviderUser = !!user.companyName;
        this.setState({ isLoggedIn: true, user: user, isProviderUser });
      })
      .catch((err) => {
        this.setState({ isLoggedIn: false, user: null });
      });
  };

  userLogin = (email, password) => {
    return authService
      .userLogin(email, password)
      .then((user) => {
        const isProviderUser = !!user.companyName;
        this.setState({ isLoggedIn: true, user: user, isProviderUser });
      })
      .catch((err) => {
        this.setState({ isLoggedIn: false, user: null });
      });
  };

  providerSignup = (companyName, address, phoneNumber, email, password) => {
    return authService
      .providerSignup(companyName, address, phoneNumber, email, password)
      .then((user) => {
        const isProviderUser = !!user.companyName;
        this.setState({ isLoggedIn: true, user: user, isProviderUser });
      })
      .then((user) => this.setState({ isLoggedIn: true, user }))
      .catch((err) => {
        this.setState({ isLoggedIn: false, user: null });
      });
  };

  providerLogin = (email, password) => {
    return authService.providerLogin(email, password).then((user) => {
      const isProviderUser = !!user.companyName;
      this.setState({ isLoggedIn: true, user: user, isProviderUser });
    });
  };

  logout = () => {
    authService
      .logout()
      .then(() =>
        this.setState({ isLoggedIn: false, user: null, isProviderUser: false })
      )
      .catch((err) => console.log(err));
  };
  updateUser = (user) => this.setState({ user });

  render() {
    const { isLoggedIn, isLoading, user, isProviderUser } = this.state;
    const {
      userSignup,
      userLogin,
      providerSignup,
      providerLogin,
      updateUser,
      logout,
    } = this;

    if (isLoading) return <p>Loading</p>;

    return (
      <Provider
        value={{
          isLoggedIn,
          isLoading,
          user,
          isProviderUser,
          userSignup,
          userLogin,
          providerSignup,
          providerLogin,
          updateUser,
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
            isProviderUser,
            userSignup,
            userLogin,
            providerSignup,
            providerLogin,
            updateUser,
            logout,
          } = value;

          return (
            <WrappedComponent
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
              user={user}
              isProviderUser={isProviderUser}
              userSignup={userSignup}
              userLogin={userLogin}
              providerSignup={providerSignup}
              providerLogin={providerLogin}
              updateUser={updateUser}
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
