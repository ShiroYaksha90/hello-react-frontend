import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const API_URL = 'http://127.0.0.1:3000/random';

export const getRandomGreeting = createAsyncThunk(
  'greetings/random',
  async () => {
    try {
      const res = await axios.get(API_URL);
      return res.data.message;
    } catch (error) {
      throw error;
    }
  },
);

const initialState = {
  message: '',
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers(builder) {
    builder.addCase(getRandomGreeting.fulfilled, (state, { payload }) => {
      state.message = payload;
    });
  },
});

export default greetingSlice.reducer;