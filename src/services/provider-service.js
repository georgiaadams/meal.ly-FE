import axios from "axios";

class ProviderService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL + "/api",
      withCredentials: true,
    });
  }
  getAllOffersProvider = () => {
    const pr = this.api
      .get("/provider/offers")
      .then((response) => response.data); // res.json()  res.send()
    return pr;
  };
  getOneOfferProvider = (id) => {
    const pr = this.api
      .get(`/provider/offers/${id}`)
      .then((response) => response.data);
    return pr;
  };

  createOffer = (content, quantity, date, pickupSlot, companyName, address, image) => {
    const data = { content, quantity, date, pickupSlot, companyName, address, image };
    const pr = this.api.post("/provider/offers", data);
    return pr;
  };
  editOffer = (id, { companyName, content, quantity, date, pickupSlot, address }) => {
    const pr = this.api
      .put(`/provider/offers/${id}`, {
        companyName,
        content,
        quantity,
        date,
        pickupSlot,
        address
      })
      .then((response) => response.data);
    return pr;
  };

  deleteOffer = (id) => {
    const pr = this.api
      .delete(`/provider/offers/${id}`)
      .then((response) => response.data);
    return pr;
  };

  acceptOffer = ({ offerId }) => {
    const pr = this.api
      .put("/provider/offers/status/update", {
        offerId,
      })
      .then(({ data }) => data);
    return pr;
  };
}
const providerService = new ProviderService();
export default providerService;
