import { createSlice } from "@reduxjs/toolkit";
import { getUserSubscription } from "./subscription-operations";

const initialState = {
  data: {
    type: "Common",
    isPremium: false,
    expired: {
      startDate: null,
      endDate: null,
    },
  },
  loading: false,
  error: null,
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Обработка успешного получения подписки
    builder.addCase(getUserSubscription.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    // Обработка начала запроса
    builder.addCase(getUserSubscription.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    // Обработка ошибки при получении подписки
    builder.addCase(getUserSubscription.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default subscriptionSlice.reducer;
export const subscriptionReducer = subscriptionSlice.reducer;
