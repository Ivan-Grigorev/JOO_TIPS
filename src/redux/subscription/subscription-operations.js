import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Создаем асинхронный thunk для получения подписки
export const getUserSubscription = createAsyncThunk(
  "subscription/fetchSubscription",
  async () => {
    const response = await axios.get("/subscription");
    return response.data.subscription;
  }
);
