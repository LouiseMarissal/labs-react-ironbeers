import axios from "axios";

const service = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com/beers"
});

export default {
  service: service,
  getAll: () => {
    return service.get("/");
  },

  getOne: id => {
    return service.get(id);
  },
  getRandom: () => {
    return service.get("/random");
  },
  createNew: () => {
    return service.post("/new");
  },
  getQuery: () => {
    return service.get("/search?q=${query}");
  }
};
