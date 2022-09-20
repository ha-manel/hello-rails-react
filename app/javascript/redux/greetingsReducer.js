import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  message: '',
};

export const getGreetingMessage = createAsyncThunk('getMessage', async () => {
  const response = await fetch('api/messages');
  const message = await response.json()
  return message.greeting
});

export const greetingsSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: {
    [getGreetingMessage.fulfilled]: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const {} = greetingsSlice.actions;

export default greetingsSlice.reducer;
