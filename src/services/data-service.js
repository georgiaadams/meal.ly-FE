import axios from "axios";

class DataService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:5000/api",
      withCredentials: true,
    });
  }

  //PROVIDER ROUTES

  getAllOffersProvider = () => {
    const pr = this.api.get("/provider/offers");

    return pr;
  };

  getOneOfferProvider = (id) => {
    const pr = this.api.get(`/provider/offers/${id}`);

    return pr;
  };

  createOffer = (data) => {
    const pr = this.api.post(`/provider/offers/${id}`, data);

    return pr;
  };
  editOffer = (id) => {
    const pr = this.api.put(`/provider/offers/${id}`);

    return pr;
  };
  deleteOffer = (id) => {
    const pr = this.api.delete(`/provider/offers/${id}`);

    return pr;
  };

  //USER ROUTES

  getOffersUser = () => {
    const pr = this.api.get("/user/offers/status/new");

    return pr;
  };

  getOneOfferUser = (id) => {
    const pr = this.api.get(`user/offers/${id}`);

    return pr;
  };

  getPendingOffersUser = () => {
    const pr = this.api.get("user/offers/status/ready-requested");

    return pr;
  };

  getCompletedOffersUser = () => {
    const pr = this.api.get("/user/offers/status/completed");

    return pr;
  };
}

// Create instance (object) containing all axios calls as methods
const exampleService = new DataService();

export default exampleService;

// Service is a set of methods abstracted and placed into a class, out of which we create one instance.
// In the above case, all axios request calls are abstracted into methods.
