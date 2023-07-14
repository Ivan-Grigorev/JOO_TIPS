import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Set the base URL for axios requests
axios.defaults.baseURL = "http://localhost:3000";

// This object is used to set or unset the authorization token in the axios headers
const token = {
  set(token) {
    // This function sets the token into the axios header
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    // This function removes the token from the axios header
    axios.defaults.headers.common.Authorization = "";
  },
};

// This async thunk is responsible for user registration

const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      // It makes a post request to the signup endpoint with the user's credentials
      const { data } = await axios.post("/users/signup", credentials);

      // If the request is successful, it sets the received token into the axios header
      token.set(data.token);

      // The response data is returned to be used by the redux reducer
      return data;
    } catch (error) {
      // In case of an error, it returns a rejected promise with the error message
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// The rest of the async thunks follow the same pattern as the register thunk above
// They make requests to different endpoints and handle the responses and errors similarly

const logIn = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  // Reading the token from the state via getState()
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  // If there is no token, exit without performing any request
  if (persistedToken === null)  return thunkAPI.rejectWithValue("Unable to fetch user"); // prettier-ignore

  try {
    // If there is a token, add it to the HTTP header and perform the request
    token.set(persistedToken);
    const { data } = await axios.get("/users/current");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const updateUserProfile = createAsyncThunk(
  "auth/updateProfile",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.patch("/users/current/profile", credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const deleteUser = createAsyncThunk(
  "auth/deleteUser",
  async (credentials, thunkAPI) => {
    try {
      await axios.put("/users/current", credentials);
      toast.success("Ваш обліковий запис був видалений");

      token.unset();
    } catch (error) {
      console.error("error from auth-operations", error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const sendRecoverMail = createAsyncThunk(
  "auth/reset-password",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "/users/current/reset-password",
        credentials
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// This async thunk checks if the password reset token has expired
const isTokenExpired = createAsyncThunk(
  "auth/checkResetToken",
  async (credentials, thunkAPI) => {
    try {
      const { token } = credentials; // bring token from dispatch args

      const { data } = await axios.get(`/users/reset-password/${token}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const setNewPassword = createAsyncThunk(
  "auth/setNewPassword",
  async (credentials, thunkAPI) => {
    try {
      const { token, password, confirmedPassword } = credentials;

      const { data } = await axios.post(`/users/reset-password/${token}`, {
        password,
        confirmedPassword,
      });

      return data;
    } catch (error) {
      console.error("Error creating new password");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export {
  token,
  register,
  logOut,
  logIn,
  refreshUser,
  updateUserProfile,
  deleteUser,
  sendRecoverMail,
  isTokenExpired,
  setNewPassword,
};
