import axios from "axios";

const instance = axios.create();

instance.defaults.baseURL = "http://localhost:5000";
instance.defaults.headers.post["Content-Type"] = "application/json";

const token = "CHANGE_THIS_TOKEN_TO_YOUR_TOKEN";
instance.interceptors.request.use(
  async (config) => {
    config.headers.common["Authorization"] = `Bearer ${token}`;
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
        // toast.error("You are offline. Please check Internet Connection.");
        return Promise.reject(error);
      } else {
        // toast.error("Our Server API is not working at the moment.");
        return Promise.reject(error);
      }
    return Promise.reject(error);
  }
);

export default instance;
