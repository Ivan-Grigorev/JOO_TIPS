import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../config/axios";

const fetchlanguages = createAsyncThunk(
  "languages/fetchlanguages",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get("/languages");
      return data;
    } catch (error) {
      console.error("Error fetching languages");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const addLanguage = createAsyncThunk(
  "languages/addlanguages",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/languages/add");
      return data;
    } catch (error) {
      console.error("Error fetching languages");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export { fetchlanguages, addLanguage };
