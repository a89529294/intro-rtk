import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [] as string[],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {},
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

const startingState = store.getState();
console.log(JSON.stringify(startingState));

store.dispatch({ type: "song/addSong", payload: "ss" });

const updatedState = store.getState();
console.log(JSON.stringify(updatedState));
