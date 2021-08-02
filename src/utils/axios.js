import axios from "axios";
import { getAccessToken } from "utils/auth";
import CustomSnackbar from "components/CustomSnackbar";

// const baseURL = "https://api.inspireonic.com";
const baseURL = "http://localhost:5000";

const instance = axios.create();

instance.defaults.baseURL = baseURL;
instance.defaults.headers.post["Content-Type"] = "application/json";

instance.interceptors.request.use(
  async (config) => {
    if (await getAccessToken())
      config.headers.common[
        "Authorization"
      ] = `Bearer ${await getAccessToken()}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response)
      if (!navigator.onLine) {
        CustomSnackbar(
          "error",
          "You are offline. Please check Internet Connection."
        );
        return Promise.reject(error);
      } else {
        CustomSnackbar("error", "Our Server is not working at the moment.");
        return Promise.reject(error);
      }
    return Promise.reject(error);
  }
);

export const instanceNoAuth = axios.create();

instanceNoAuth.defaults.baseURL = baseURL;
instanceNoAuth.defaults.headers.post["Content-Type"] = "application/json";

instanceNoAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response)
      if (!navigator.onLine) {
        CustomSnackbar(
          "error",
          "You are offline. Please check Internet Connection."
        );
        return Promise.reject(error);
      } else {
        CustomSnackbar("error", "Our Server is not working at the moment.");
        return Promise.reject(error);
      }
    return Promise.reject(error);
  }
);

export default instance;
