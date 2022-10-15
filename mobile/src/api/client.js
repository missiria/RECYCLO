import { API_URL } from "~/api/constants";
import { create } from "apisauce";
import axios from "axios";

const config = {
  baseURL: API_URL,
  headers: {
    accept: "*/*",
    "content-type": "application/json",
  },
};

//const customAxiosInstance = axios.create(config)

//const apiClient = create({ axiosInstance: customAxiosInstance })

const apiClient = create(config);
export const axiosInstance = axios.create({
  ...config,
});

export default apiClient;
