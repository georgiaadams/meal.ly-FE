import axios from "axios";

class UserService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:5000/api",
      withCredentials: true,
    });
  }
  getOffersUser = () => {
    const pr = this.api.get("/user/offers/status/new").then(({ data }) => data);
    return pr;
  };
  getOneOfferUser = (id) => {
    const pr = this.api.get(`user/offers/${id}`).then(({ data }) => data);
    return pr;
  };
  getPendingOffersUser = () => {
    const pr = this.api
      .get("user/offers/status/ready-requested")
      .then(({ data }) => data);
    return pr;
  };
  getCompletedOffersUser = () => {
    const pr = this.api
      .get("/user/offers/status/completed")
      .then(({ data }) => data);
    return pr;
  };
}
// Create instance (object) containing all axios calls as methods
const userService = new UserService();

export default userService;

// Service is a set of methods abstracted and placed into a class, out of which we create one instance.
// In the above case, all axios request calls are abstracted into methods.
