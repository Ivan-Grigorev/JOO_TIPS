import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://localhost:3000";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);

      token.set(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

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

const resetUserPassword = createAsyncThunk(
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

const isTokenExpired = createAsyncThunk(
  "auth/checkResetToken",
  async (token, thunkAPI) => {
    try {
      console.log("is token expired operations");
      const { data } = await axios.get(`/users/reset-password/${token}`);
      return data;
    } catch (error) {
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
  resetUserPassword,
  isTokenExpired,
};
