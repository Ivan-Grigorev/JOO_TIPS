import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Создаем асинхронный thunk для получения подписки
export const getUserSubscriptionTime = createAsyncThunk(
  "subscription/fetchSubscription",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get("/users/subscription", credentials);
      return data;
    } catch (error) {
      console.error(`Error fetching subscription: ${error}`);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
