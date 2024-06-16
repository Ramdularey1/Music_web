import {createSlice} from "@reduxjs/toolkit"

const currentMusicSlice = createSlice({
    name: "currentSong",
    initialState: {
        currentSongs : null
    },
     
    reducers:{
        updateCurrentSong: (state,action) => {
            state.currentSongs = action.payload;
        }
    }

})

export const {updateCurrentSong} = currentMusicSlice.actions;
export default currentMusicSlice.reducer