import axios from "axios";

const api = axios.create({ baseURL: "http://192.168.254.225:53598/api" });

export default api;
