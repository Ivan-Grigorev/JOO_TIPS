import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const getSubscriptionDetails = createAsyncThunk(
  "subscription/details",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get("/users/subscription", credentials);
      return data;
    } catch (error) {
      toast.error("Сталася помилка під час спроби отримати деталi пiдписки.");

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateSubscription = createAsyncThunk(
  "subscription/update",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.patch("/users/subscription", credentials);
      toast.success("Вашу підписку активовано.");

      return data;
    } catch (error) {
      toast.error("Сталася помилка під час активації вашої підписки.");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetSubscription = createAsyncThunk(
  "subscription/reset",
  async (credentials, thunkAPI) => {
    try {
      await axios.patch("/users/subscription/reset", credentials);
      toast.warn("Ваша підписка закінчилася.");
    } catch (error) {
      toast.error("Сталася помилка під час обробки вашої підписки.");
      return thunkAPI.rejectWithValue(error);
    }
  }
);
