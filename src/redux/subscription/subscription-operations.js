import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSubscriptionDetails = createAsyncThunk(
  "subscription/details",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get("/users/subscription", credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateSubscription = createAsyncThunk(
  "subscription/update",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.patch("/users/subscription", credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetSubscription = createAsyncThunk(
  "subscription/reset",
  async (credentials, thunkAPI) => {
    try {
      await axios.patch("/users/subscription/reset", credentials);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
