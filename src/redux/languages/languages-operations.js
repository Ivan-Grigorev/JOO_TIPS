import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../config/axios";
import { toast } from "react-toastify";

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
      const { data } = await axios.post("/languages/add", credentials);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      console.error("Error adding languages");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const setActiveLanguage = createAsyncThunk(
  "languages/setActiveLanguage",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/languages/add/active", credentials);
      return data;
    } catch (error) {
      console.error("Error adding languages");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export { fetchlanguages, addLanguage, setActiveLanguage };
