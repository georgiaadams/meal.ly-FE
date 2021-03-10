import axios from "axios";

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }

  userSignup(firstName, lastName, email, password) {
    const pr = this.auth
      .post("/auth/user/signup", { firstName, lastName, email, password })
      .then((response) => response.data)
      .catch((err) => {
        if (err.response) throw new Error(err.response.data.message);
        else return new Error("Something went wrong");
      });

    return pr;
  }

  userLogin(email, password) {
    const pr = this.auth
      .post("/auth/user/login", { email, password })
      .then((response) => response.data)
      .catch((err) => {
        if (err.response) throw new Error(err.response.data.message);
        else return new Error("Something went wrong");
      });

    return pr;
  }

  providerSignup(companyName, address, phoneNumber, email, password) {
    const pr = this.auth
      .post("/auth/signup", {
        companyName,
        address,
        phoneNumber,
        email,
        password,
      })
      .then((response) => response.data)
      .catch((err) => {
        if (err.response) throw new Error(err.response.data.message);
        else return new Error("Something went wrong");
      });
    // .then(({ data }) => data); // Shorter way of `.then((response) => response.data);`

    return pr;
  }

  providerLogin(email, password) {
    const pr = this.auth
      .post("/auth/login", { email, password })
      .then((response) => response.data)
      .catch((err) => {
        if (err.response) throw new Error(err.response.data.message);
        else return new Error("Something went wrong");
      });

    return pr;
  }

  logout() {
    const pr = this.auth.get("/auth/logout").then((response) => response.data);

    return pr;
  }

  me() {
    const pr = this.auth.get("/auth/me").then((response) => response.data);

    return pr;
  }
}

const authService = new AuthService();

export default authService;

// Service is a set of methods abstracted and placed into a class, out of which we create one instance.
// In the above case, all axios request calls are abstracted into methods.
