import { createSlice } from "@reduxjs/toolkit";
import {
  changePassword,
  deleteUser,
  isTokenExpired,
  // getUserAvatar,
  logIn,
  logOut,
  refreshUser,
  register,
  sendRecoverMail,
  setNewPassword,
  updateUserProfile,
} from "./auth-operations";

const initialState = {
  user: {
    name: null,
    email: null,
    avatar: null,
    phone: null,
  },
  profile: {
    about: null,
    avatarName: null,
    interfaceLanguage: null,
    notifications: null,
  },
  token: null,
  restorePasswordToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: { signup: [], login: [], delete: [], profile: [], password: [] },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleSetError: (state, action) => {
      const { field, error } = action.payload;
      state.error[field].push(error);
    },
    resetDeleteErrors: (state) => {
      state.error.delete = [];
    },
    resetResetPasswordErrors: (state) => {
      state.error.password = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.profile = action.payload.profile;
        state.token = action.payload.token;

        console.log(action.payload);

        state.isLoggedIn = true;
        state.error.signup = initialState.error.signup;

        state.isLoading = initialState.isLoading;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.error.signup = []; // reset
        state.isLoading = initialState.isLoading;

        if (!state.error.signup.includes(action.payload)) {
          state.error.signup.push(action.payload);
        }
      })

      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.profile = action.payload.profile;
        state.token = action.payload.token;

        state.isLoggedIn = true;
        state.error = initialState.error;
        state.isLoading = initialState.isLoading;
      })
      .addCase(logIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error.login = []; // reset
        state.isLoading = initialState.isLoading;

        if (!state.error.login.includes(action.payload)) {
          state.error.login.push(action.payload);
        }
      })

      .addCase(logOut.fulfilled, (state) => {
        state.user = initialState.user;
        state.token = initialState.token;
        state.isLoggedIn = initialState.isLoggedIn;
        state.isLoading = initialState.isLoading;
        state.error = initialState.error;
      })
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOut.rejected, (state) => {
        state.isLoading = initialState.isLoading;
      })

      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.profile = action.payload.profile;

        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.isLoading = initialState.isLoading;
        state.error = initialState.error;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.isLoading = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoading = initialState.isLoading;
      })

      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload.profile;
        state.user = action.payload.user;

        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.isLoading = initialState.isLoading;
        state.error = initialState.error;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.isRefreshing = true;
        state.isLoading = true;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.error.profile = []; // reset
        state.isLoading = initialState.isLoading;

        if (!state.error.profile.includes(action.payload)) {
          state.error.profile.push(action.payload);
        }
      })

      .addCase(deleteUser.fulfilled, (state) => {
        state.user = initialState.user;
        state.token = initialState.token;
        state.isLoggedIn = initialState.isLoggedIn;
        state.isLoading = initialState.isLoading;
        state.error = initialState.error;
      })
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error.delete = []; // reset
        state.isLoading = initialState.isLoading;

        if (!state.error.delete.includes(action.payload)) {
          state.error.delete.push(action.payload);
        }
      })

      .addCase(sendRecoverMail.fulfilled, (state, action) => {
        console.log(action.payload);
        // state.user = initialState.user;
        // state.token = initialState.token;
        state.isLoggedIn = initialState.isLoggedIn;
        state.isLoading = initialState.isLoading;
        state.error = initialState.error;
      })
      .addCase(sendRecoverMail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendRecoverMail.rejected, (state, action) => {
        state.error.password = []; // reset
        state.isLoading = initialState.isLoading;

        if (!state.error.password.includes(action.payload)) {
          state.error.password.push(action.payload);
        }
      })

      .addCase(isTokenExpired.fulfilled, (state, action) => {
        state.restorePasswordToken = action.payload.valid;
      })
      .addCase(isTokenExpired.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(isTokenExpired.rejected, (state) => {
        state.isLoading = initialState.isLoading;
      })

      .addCase(setNewPassword.fulfilled, (state) => {
        state.user = initialState.user;
        state.token = initialState.token;
        state.isLoggedIn = initialState.isLoggedIn;
        state.isLoading = initialState.isLoading;
        state.error = initialState.error;
      })
      .addCase(setNewPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setNewPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error.password = action.error;
      })

      .addCase(changePassword.fulfilled, (state) => {
        state.isLoading = initialState.isLoading;
        state.error = initialState.error;
      })
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error.password = action.error;
      });
  },
});

export const { handleSetError, resetDeleteErrors, resetResetPasswordErrors } =
  authSlice.actions;
export default authSlice.reducer;
export const authReducer = authSlice.reducer;
