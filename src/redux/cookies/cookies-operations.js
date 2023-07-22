import axios from "../../config/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const setCookies = createAsyncThunk(
  "cookies/set",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/cookies", credentials);
      return data;
    } catch (error) {
      console.error(`Error cookies acting: ${error.response.data.message}`);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export { setCookies };
