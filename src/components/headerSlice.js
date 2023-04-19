import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  height: undefined,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    getHeight: (state, action) => {
      state.height = action.payload;
    },
  },
});

export const { getHeight } = headerSlice.actions;

export default headerSlice.reducer;