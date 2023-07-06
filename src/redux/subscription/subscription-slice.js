import { createSlice } from "@reduxjs/toolkit";
import {
  getSubscriptionDetails,
  resetSubscription,
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
      state.data = action.payload;
    });
    builder.addCase(getSubscriptionDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSubscriptionDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    builder.addCase(resetSubscription.fulfilled, (state, action) => {
      state.data = action.payload;
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
