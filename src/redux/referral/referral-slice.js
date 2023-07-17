import { createSlice } from "@reduxjs/toolkit";
import { increaseReferralCount } from "./referral-operations";

const initialState = { ref: {}, isLoading: false };

const referralSlice = createSlice({
  name: "referral",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(increaseReferralCount.fulfilled, (state, action) => {
        state.isLoading = initialState.isLoading;
      })
      .addCase(increaseReferralCount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(increaseReferralCount.rejected, (state, action) => {
        state.isLoading = initialState.isLoading;
      });
  },
});

export default referralSlice.reducer;
export const authReducer = referralSlice.reducer;
