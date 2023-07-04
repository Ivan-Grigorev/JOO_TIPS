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
  error: { signup: [], login: [] },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error.signup = initialState.error.signup;
      })
      .addCase(register.rejected, (state, action) => {
        state.error.signup = []; // reset

        if (!state.error.signup.includes(action.payload)) {
          state.error.signup.push(action.payload);
        }
      })

      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = initialState.error;
      })

      .addCase(logIn.rejected, (state, action) => {
        state.error.login = []; // reset

        if (!state.error.login.includes(action.payload)) {
          state.error.login.push(action.payload);
        }
      })

      .addCase(logOut.fulfilled, (state) => {
        state.user = initialState.user;
        state.token = initialState.token;
        state.isLoggedIn = initialState.isLoggedIn;
        state.error = initialState.error;
      })

      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      });
    // .addCase(getUserAvatar.fulfilled, (state, action) => {
    //   state.user.avatar = action.payload;
    // })
    // .addCase(getUserAvatar.pending, (state) => {
    //   state.isRefreshing = true;
    // });
  },
});

export default authSlice.reducer;
export const authReducer = authSlice.reducer;
