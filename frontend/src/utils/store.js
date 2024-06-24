// import {configureStore} from "@reduxjs/toolkit"

// import allSongsSlice from "./allSongsSlice";
// import currentMusicSlice from "./currentMusicSlice";

//  const store = configureStore({
// reducer: {
   
//     "name":allSongsSlice,
//     "currentMusic":currentMusicSlice
// }
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import allSongsReducer from "./allSongsSlice"; // Assuming this exports the reducer


const store = configureStore({
  reducer: {
    allSongs: allSongsReducer,
    
  }
});

export default store;
