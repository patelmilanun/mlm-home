import CustomSnackbar from "components/CustomSnackbar";
import axios, { instanceNoAuth } from "utils/axios";
import store from "store";
import { logout } from "slices/auth";

export const setSession = (tokens) => {
  if (tokens?.access && tokens?.refresh) {
    localStorage.setItem("accessToken", tokens.access.token);
    localStorage.setItem("accessTokenExpires", tokens.access.expires);
    localStorage.setItem("refreshToken", tokens.refresh.token);
    localStorage.setItem("refreshTokenExpires", tokens.refresh.expires);
  } else {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("accessTokenExpires");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("refreshTokenExpires");
    delete axios.defaults.headers.common.Authorization;
  }
};

export const getAccessToken = async (logoutIfNotAuthorize = true) => {
  const accessToken = localStorage.getItem("accessToken");
  const accessTokenExpires = localStorage.getItem("accessTokenExpires");
  const refreshToken = localStorage.getItem("refreshToken");
  const refreshTokenExpires = localStorage.getItem("refreshTokenExpires");
  if (accessToken && accessTokenExpires) {
    if (new Date().getTime() <= new Date(accessTokenExpires).getTime()) {
      return accessToken;
    }
  }
  if (
    refreshToken &&
    refreshTokenExpires &&
    new Date().getTime() <= new Date(refreshTokenExpires).getTime()
  ) {
    const response = await instanceNoAuth
      .post("/v1/auth/refresh-tokens", { refreshToken })
      .catch((error) => {
        CustomSnackbar("error", error.response.data.message);
      });
    setSession(response.data);
    return response.data.access.token;
  } else {
    if (logoutIfNotAuthorize) store.dispatch(logout());
    return false;
  }
};
