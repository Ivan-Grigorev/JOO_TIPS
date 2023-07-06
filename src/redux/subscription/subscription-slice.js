import { createSlice } from "@reduxjs/toolkit";
import {
  getSubscriptionDetails,
  resetSubscription,
  updateSubscription,
} from "./subscription-operations";

const initialState = {
  data: {
    type: "Common",
    isPremium: false,
    expired: {
      startDate: null,
      endDate: null,
    },
    remainingTime: null,
  },
  loading: false,
  error: null,
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSubscriptionDetails.fulfilled, (state, action) => {
      console.log('action.payload',action.payload)
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getSubscriptionDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSubscriptionDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    builder.addCase(updateSubscription.fulfilled, (state, action) => {
      // todo ошибка тут

      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(updateSubscription.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateSubscription.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    builder.addCase(resetSubscription.fulfilled, (state, action) => {
      state.data = initialState.data;
      state.loading = false;
    });
    builder.addCase(resetSubscription.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(resetSubscription.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default subscriptionSlice.reducer;
export const subscriptionReducer = subscriptionSlice.reducer;
