import { createSlice } from "@reduxjs/toolkit";
import { getUserSubscriptionTime } from "./subscription-operations";

const initialState = {
  data: {
    type: "Common",
    isPremium: false,
    expired: {
      startDate: null,
      endDate: null,
      remainingTime: null,
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
    builder.addCase(getUserSubscriptionTime.fulfilled, (state, action) => {
      state.loading = false;
      // console.log("Action payload in subscr-slice.js");
      // console.log(action.payload);
      state.data.expired.remainingTime = action.payload;
      // console.log(state.data);
    });
    builder.addCase(getUserSubscriptionTime.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getUserSubscriptionTime.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default subscriptionSlice.reducer;
export const subscriptionReducer = subscriptionSlice.reducer;
