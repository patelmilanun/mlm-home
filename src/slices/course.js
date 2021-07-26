import { createSlice } from "@reduxjs/toolkit";
import CustomSnackbar from "components/CustomSnackbar";
import axios from "utils/axios";

const initialState = {
  courses: [],
  isLoading: false,
};

const slice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourses(state, action) {
      state.courses = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const reducer = slice.reducer;

export const setLoading = (isLoading) => async (dispatch) => {
  dispatch(slice.actions.setLoading(isLoading));
};

export const fetchCourses = () => async (dispatch) => {
  dispatch(setLoading(true));
  const response = await axios.get("/v1/courses/").catch((error) => {
    CustomSnackbar("error", error.response.data.message);
  });
  dispatch(setLoading(false));
  if (response) {
    dispatch(slice.actions.setCourses(response.data.courses));
    return response;
  }
};

export default slice;
