import { createSlice } from "@reduxjs/toolkit";

import { reset } from "../actions";

const moviesSlice = createSlice({
  name: "movie",
  initialState: [] as string[],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      state.splice(state.indexOf(action.payload), 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, () => []);
  },
});

export default moviesSlice;
