import {configureStore} from "@reduxjs/toolkit"

import allSongsSlice from "./allSongsSlice";
import currentMusicSlice from "./currentMusicSlice";

 const store = configureStore({
reducer: {
   
    "name":allSongsSlice,
    "currentMusic":currentMusicSlice
}
});

export default store;