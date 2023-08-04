import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../config/axios";

const fetchLessonsPointsTotalSum = createAsyncThunk(
  "lessons/fetchTotalPointsSum",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get("/lessons/points");
      return data.totalPoints;
    } catch (error) {
      console.error("Error fetching lessons points total sum");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export { fetchLessonsPointsTotalSum };
