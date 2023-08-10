import { createSlice } from "@reduxjs/toolkit";
import {
  addLanguage,
  fetchlanguages,
  setActiveLanguage,
} from "./languages-operations";

const initialState = {
  languages: [],
  activeLanguage: null,
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
        state.languages = action.payload.languages;
        state.activeLanguage = action.payload.activeLanguage;
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
      })

      .addCase(setActiveLanguage.fulfilled, (state, action) => {
        state.activeLanguage = action.payload;
        state.isLoading = initialState.isLoading;
      })
      .addCase(setActiveLanguage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setActiveLanguage.rejected, (state, action) => {
        state.isLoading = initialState.isLoading;
      });
  },
});

export default languagesSlice.reducer;
export const languagesReducer = languagesSlice.reducer;
