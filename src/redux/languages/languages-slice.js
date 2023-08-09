import { createSlice } from "@reduxjs/toolkit";
import { addLanguage, fetchlanguages } from "./languages-operations";

const initialState = {
  languages: [],
  isLoading: false,
};

const languagesSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchlanguages.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.languages = action.payload;
        state.isLoading = initialState.isLoading;
      })
      .addCase(fetchlanguages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchlanguages.rejected, (state, action) => {
        state.isLoading = initialState.isLoading;
      })

      .addCase(addLanguage.fulfilled, (state, action) => {
        // state.languages = action.payload;
        state.isLoading = initialState.isLoading;
      })
      .addCase(addLanguage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addLanguage.rejected, (state, action) => {
        state.isLoading = initialState.isLoading;
      });
  },
});

export default languagesSlice.reducer;
export const languagesReducer = languagesSlice.reducer;
