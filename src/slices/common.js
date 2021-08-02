import { createSlice } from "@reduxjs/toolkit";
// import CustomSnackbar from "components/CustomSnackbar";
// import axios from "utils/axios";

const initialState = {
  title: "",
  sidebar: "full",
  isFullScreen: false,
};

const slice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setTitle(state, action) {
      state.title = action.payload;
    },
    setSidebar(state, action) {
      state.sidebar = action.payload;
    },
    setIsFullScreen(state, action) {
      state.isFullScreen = action.payload;
    },
  },
});

export const reducer = slice.reducer;

export const setTitle = (title) => (dispatch) => {
  dispatch(slice.actions.setTitle(title));
};

export const setSidebar = (type) => (dispatch) => {
  dispatch(slice.actions.setSidebar(type));
};

export const setIsFullScreen = (isFullScreen) => (dispatch) => {
  dispatch(slice.actions.setIsFullScreen(isFullScreen));
};

// export const fetchTopics = data => async dispatch => {
//   const response = await axios
//     .get(`/study-tag?tutorId=${data?.tutorId || ''}`)
//     .catch(error => {
//       CustomSnackbar('error', error.errorToDisplay);
//     });
//   if (response) {
//     dispatch(slice.actions.fetchTopics(response.data.data));
//   }
// };

export default slice;
