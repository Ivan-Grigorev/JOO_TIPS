import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  strictlyNecessary: true, // всегда true
  performance: false,
  targeting: false,
  functionality: false,
};

const cookieSlice = createSlice({
  name: "cookies",
  initialState,
  reducers: {
    setCookies: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetCookies: (state) => {
      return initialState;
    },
  },
});

export const { setCookies, resetCookies } = cookieSlice.actions;

export default cookieSlice.reducer;
