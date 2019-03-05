import axios from "axios";

const api = axios.create({
  baseURL: "https://todolist-backend-node.herokuapp.com/"
});

export default api;
