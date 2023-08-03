import { createSlice } from "@reduxjs/toolkit";
import { fetchLessonsPointsTotalSum } from "./lessons-operations";

const initialState = {
  totalPoints: null,
  isLoading: false,
};

const lessonsSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLessonsPointsTotalSum.fulfilled, (state, action) => {
        state.totalPoints = action.payload;
        state.isLoading = initialState.isLoading;
      })
      .addCase(fetchLessonsPointsTotalSum.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLessonsPointsTotalSum.rejected, (state, action) => {
        state.isLoading = initialState.isLoading;
      });
  },
});

export default lessonsSlice.reducer;
export const cookieReducer = lessonsSlice.reducer;
