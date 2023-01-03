import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
  name: "song",
  initialState: [] as string[],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      state.splice(state.indexOf(action.payload), 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, () => []);
  },
});

export default songsSlice;
