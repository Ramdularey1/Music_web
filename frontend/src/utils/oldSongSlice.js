import { configureStore, createSlice } from "@reduxjs/toolkit";

const oldSongSlice = createSlice({
    name: "oldSong",
    initialState: {
        oldSong: []
    },

    reducers: {
     updateoldSong: (state, action) => {
        state.oldSong = action.payload
     }
    }
})

export const {updateoldSong} = oldSongSlice.actions;
export default oldSongSlice.reducer