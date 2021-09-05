import axios from "axios";

const useFetch = axios.create({
  baseURL: "http://localhost:8085/",
});

export { useFetch };
