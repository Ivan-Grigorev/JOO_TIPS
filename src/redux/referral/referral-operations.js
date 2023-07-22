import axios from "../../config/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const increaseReferralCount = createAsyncThunk(
  "referral/increase",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/referral", credentials);
      return data;
    } catch (error) {
      console.error (`Error while increase referral count: ${error.response.data.message}`); // prettier-ignore
      toast.error("Error occured while increase referral count");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export { increaseReferralCount };
