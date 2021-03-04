import axios from "axios";

// THIS IS AN EXAMPLE THAT YOU CAN USE
// TO CREATE A SERVICE FOR YOUR AXIOS CALLS

class ExampleService {
  constructor() {
    // this.api  is a reusable axios request base containing the base url (baseURL)
    // of the API and the Headers options ( `withCredentials: true` )
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

  deleteOffer = (id) => {
    const pr = this.api.delete(`/provider/offers/${id}`);

    return pr;
  };

  editOffer = (id) => {
    const pr = this.api.put(`/provider/offers/${id}`);

    return pr;
  };

  //USER ROUTES

  getOffersUser = () => {
    const pr = this.api.get("/user/offers/status/new");

    return pr;
  };

  getCompletedOffersUser = () => {
    const pr = this.api.get("/user/offers/status/completed");

    return pr;
  };

  getPendingOffersUser = () => {
    const pr = this.api.get("user/offers/status/ready-requested");

    return pr;
  };

  getOneOfferUser = (id) => {
    const pr = this.api.get(`user/offers/${id}`);

    return pr;
  };
}

// Create instance (object) containing all axios calls as methods
const exampleService = new ExampleService();

export default exampleService;

// Service is a set of methods abstracted and placed into a class, out of which we create one instance.
// In the above case, all axios request calls are abstracted into methods.
