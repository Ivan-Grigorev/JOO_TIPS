import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

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

const deleteUser = createAsyncThunk(
  "auth/deleteUser",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.delete("/users/current");
      token.unset();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export { token, register, logOut, logIn, refreshUser, deleteUser };
