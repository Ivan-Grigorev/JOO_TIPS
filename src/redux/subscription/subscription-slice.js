import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPremium: false,
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    toggleSubscription: (state) => {
      state.isPremium = !state.isPremium;
    },
  },
});

export const { toggleSubscription } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
