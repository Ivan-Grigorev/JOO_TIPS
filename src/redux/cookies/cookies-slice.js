import { createSlice } from "@reduxjs/toolkit";
import { setCookies } from "./cookies-operations";

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
    set: (state, action) => {
      console.log("state", state);
      console.log("action.payload", action.payload);
      return { ...state, ...action.payload };
    },
    reset: (state) => {
      return initialState;
    },
  },
});

export const { set, reset } = cookieSlice.actions;

export default cookieSlice.reducer;
export const cookieReducer = cookieSlice.reducer;
