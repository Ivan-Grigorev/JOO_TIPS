import { createSlice } from "@reduxjs/toolkit";
import {
  fetchLessons,
  fetchLessonsPointsTotalSum,
  finishLesson,
} from "./lessons-operations";

const initialState = {
  lessons: [],
  points: 0,
  isLoading: false,
};

const lessonsSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {
    increasePoints: (state, action) => {
      state.points += action.payload; // Increase points by the payload amount
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLessonsPointsTotalSum.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.points = action.payload;
        state.isLoading = initialState.isLoading;
      })
      .addCase(fetchLessonsPointsTotalSum.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLessonsPointsTotalSum.rejected, (state) => {
        state.isLoading = initialState.isLoading;
      })

      .addCase(fetchLessons.fulfilled, (state, action) => {
        state.lessons = action.payload;
        state.isLoading = initialState.isLoading;
      })
      .addCase(fetchLessons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLessons.rejected, (state) => {
        state.isLoading = initialState.isLoading;
      })

      .addCase(finishLesson.fulfilled, (state, action) => {
        state.lessons = action.payload;
        state.isLoading = initialState.isLoading;
      })
      .addCase(finishLesson.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(finishLesson.rejected, (state) => {
        state.isLoading = initialState.isLoading;
      });
  },
});
export const { increasePoints } = lessonsSlice.actions;

export default lessonsSlice.reducer;
export const lessonsReducer = lessonsSlice.reducer;
