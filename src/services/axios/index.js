import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

const token = localStorage.getItem("access_token")
  ? localStorage.getItem("access_token")
  : "";

instance.defaults.headers.common = {
  authorization: `Bearer ${token}`,
};

export default instance;
