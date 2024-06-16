import { createSlice } from "@reduxjs/toolkit";

const allSongsSlice = createSlice({
    name:"allSongs",

    initialState:{
        allSongs: []
    },

    reducers:{
        updateAllSong :(state, action) => {
            state.allSongs = action.payload
        }
    }
})

export const {updateAllSong} = allSongsSlice.actions
export default allSongsSlice.reducer;