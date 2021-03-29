import { createSlice } from "@reduxjs/toolkit";
// import CustomSnackbar from "components/CustomSnackbar";
import axios from "utils/axios";

const initialState = {
  user: {},
  isLoading: false,
  isSubmitting: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setSubmitting(state, action) {
      state.isSubmitting = action.payload;
    },
  },
});

export const reducer = slice.reducer;

export const setLoading = (isLoading) => async (dispatch) => {
  dispatch(slice.actions.setLoading(isLoading));
};

export const setSubmitting = (isSubmitting) => async (dispatch) => {
  dispatch(slice.actions.setSubmitting(isSubmitting));
};

export const signup = (data) => async (dispatch) => {
  const response = await axios
    .post("/v1/auth/register", data)
    .catch((error) => {
      console.log(error);
      //   CustomSnackbar("error", error.errorToDisplay);
    });
  if (response) {
    console.log(response);
    return response;
  }
};

export default slice;
