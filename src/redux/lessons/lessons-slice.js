import { createSlice } from "@reduxjs/toolkit";
import {
  fetchLessons,
  fetchActiveLessonPoints,
  finishLesson,
} from "./lessons-operations";

const initialState = {
  lessons: [],
  points: 0,
  isLoading: false,
  missed: null,
};

const lessonsSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {
    increasePoints: (state, action) => {
      state.points += action.payload; // Increase points by the payload amount
    },
    setMissedType: (state, action) => {
      state.missed = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchActiveLessonPoints.fulfilled, (state, action) => {
        state.points = action.payload;
        state.isLoading = initialState.isLoading;
      })
      .addCase(fetchActiveLessonPoints.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchActiveLessonPoints.rejected, (state) => {
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
export const { increasePoints, setMissedType } = lessonsSlice.actions;

export default lessonsSlice.reducer;
export const lessonsReducer = lessonsSlice.reducer;
