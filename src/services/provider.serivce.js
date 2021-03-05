import axios from "axios";

class providerService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:5000/api",
      withCredentials: true,
    });
  }

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
}

const providerService = new providerService();
export default providerService;
