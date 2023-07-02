import { createSlice } from "@reduxjs/toolkit";
import {
  // getUserAvatar,
  logIn,
  logOut,
  refreshUser,
  register,
} from "./auth-operations";

const initialState = {
  user: { name: null, email: null, avatar: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = initialState.isLoggedIn;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
    // [getUserAvatar.fulfilled](state, action) {
    //   state.user.avatar = action.payload;
    // },
    // [getUserAvatar.pending](state) {
    //   state.isRefreshing = true;
    // },
  },
});

export default authSlice.reducer;
export const authReducer = authSlice.reducer;
