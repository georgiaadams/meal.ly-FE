import axios from "axios";

class UserService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL + "/api",
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
      .get("/user/offers/status/ready-requested")
      .then(({ data }) => data);
    return pr;
  };
  getCompletedOffersUser = () => {
    const pr = this.api
      .get("/user/offers/status/completed")
      .then(({ data }) => data);
    return pr;
  };

  requestOffer = ({ offerId, comments, pickupSlot }) => {
    const pr = this.api
      .put("/user/offers/status/update", {
        offerId,
        comments,
        pickupSlot,
      })
      .then(({ data }) => data);
    return pr;
  };

  completeOffer = ({ offerId }) => {
    const pr = this.api
      .put("/user/offers/status/completed", {
        offerId,
      })
      .then(({ data }) => data);
    return pr;
  };
  getProfile = () => {
    const pr = this.api.get("/user/profile").then(({ data }) => data);
    return pr;
  };
  editProfile = ({ firstName, lastName, email }) => {
    const pr = this.api
      .put("/user/profile/edit", { firstName, lastName, email })
      .then(({ data }) => data);
    return pr;
  };
}

const userService = new UserService();

export default userService;
