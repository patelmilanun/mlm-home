import { createSlice } from "@reduxjs/toolkit";
import CustomSnackbar from "components/CustomSnackbar";
import axios, { instanceNoAuth as axiosNoAuth } from "utils/axios";
import { history } from "utils/history";
import { setSession, getAccessToken } from "utils/auth";

const initialState = {
  user: {},
  tokens: {},
  paymentLink: "",
  isLoading: false,
  isSubmitting: false,
  isAuthenticated: false,
  isInitialized: false,
  paymentStatus: "paymentPending",
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setTokens(state, action) {
      state.tokens = action.payload;
    },
    setPaymentLink(state, action) {
      state.paymentLink = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setSubmitting(state, action) {
      state.isSubmitting = action.payload;
    },
    setAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
    setInitialized(state, action) {
      state.isInitialized = action.payload;
    },
    setPaymentStatus(state, action) {
      state.paymentStatus = action.payload;
    },
    resetState(state) {
      state.user = {};
      state.tokens = {};
      state.paymentLink = "";
      state.isLoading = false;
      state.isSubmitting = false;
      state.isAuthenticated = false;
      state.paymentStatus = "paymentPending";
    },
  },
});

export const reducer = slice.reducer;

export const initialize = () => async (dispatch) => {
  console.log("initializing");
  const accessToken = await getAccessToken(false);
  if (accessToken) {
    dispatch(slice.actions.setAuthenticated(true));
  } else {
    setSession(null);
  }
  dispatch(slice.actions.setInitialized(true));
};

export const setLoading = (isLoading) => async (dispatch) => {
  dispatch(slice.actions.setLoading(isLoading));
};

export const setSubmitting = (isSubmitting) => async (dispatch) => {
  dispatch(slice.actions.setSubmitting(isSubmitting));
};

export const signup = (data) => async (dispatch) => {
  dispatch(setSubmitting(true));
  const response = await axiosNoAuth
    .post("/v1/auth/register", data)
    .catch((error) => {
      CustomSnackbar("error", error.response.data.message);
    });
  dispatch(setSubmitting(false));
  if (response) {
    dispatch(slice.actions.setPaymentLink(response.data.paymentLink));
    dispatch(slice.actions.setUser(response.data.user));
    return response;
  }
};

export const login = (data) => async (dispatch) => {
  dispatch(setSubmitting(true));
  const response = await axiosNoAuth
    .post("/v1/auth/login", data)
    .catch((error) => {
      CustomSnackbar("error", error.response.data.message);
    });
  dispatch(setSubmitting(false));
  if (response) {
    dispatch(slice.actions.setPaymentLink(response.data.paymentLink));
    dispatch(slice.actions.setUser(response.data.user));
    if (response.data.paymentLink !== "") {
      history.push("/auth/signup", { step: 1 });
    } else {
      setSession(response.data.tokens);
      dispatch(slice.actions.setAuthenticated(true));
      dispatch(slice.actions.setTokens(response.data.tokens));
      history.push("/app/dashboard");
    }
    return response;
  }
};

export const logout = () => (dispatch) => {
  setSession(null);
  dispatch(slice.actions.resetState());
  history.push("/");
};

export const fetchPaymentStatus = (data) => async (dispatch) => {
  dispatch(setSubmitting(true));
  const response = await axiosNoAuth
    .get(`/v1/auth/register-payment-status/${data.userId}`, {})
    .catch((error) => {
      CustomSnackbar("error", error.response.data.message);
    });
  dispatch(setSubmitting(false));
  if (response) {
    dispatch(slice.actions.setPaymentStatus(response.data.paymentStatus));
    return response;
  }
};

export const fetchPaymentLink = (data) => async (dispatch) => {
  dispatch(setSubmitting(true));
  const response = await axiosNoAuth
    .get(`/v1/auth/payment-link/${data.userId}`, {})
    .catch((error) => {
      CustomSnackbar("error", error.response.data.message);
    });
  dispatch(setSubmitting(false));
  if (response) {
    dispatch(slice.actions.setPaymentStatus("paymentPending"));
    dispatch(slice.actions.setPaymentLink(response.data.paymentLink));
    return response;
  }
};

export default slice;
