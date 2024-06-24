
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./utils/store";

import NavBar from "./Component/NavBar";
import Body from "./Component/Body";

import AllMusic from "./Component/AllMusic";
import Footer from "./Component/Footer";
import OldMusic from "./Component/OldMusic";
import Trending from "./Component/Trending";
import NewSong from "./Component/NewSong";
import HindiSong from "./Component/HindiSong";
import TopAlbum from "./Component/TopAlbum";
import Type from "./Component/Type";
import Music from "./Component/Music";
import EnglishSongs from "./Component/EnglishSongs";
import SpanishSong from "./Component/SpanishSong";
import SouthSong from "./Component/SouthSong";
import MotivationalSong from "./Component/MotivationalSong";
import PunjabiSong from "./Component/PunjabiSong";
import RomanticSong from "./Component/RomanticSong";
import TopMusic from "./Component/TopMusic";
import ArjitSingh from "./Component/carousel/ArjitSingh";
import UditNarayan from "./Component/UditNarayan";
import KumarSanu from "./Component/KumarSanu";
import AbhijeetSong from "./Component/AbhijeetSong";
import KkSong from "./Component/KkSong";
import HoneySinghSong from "./Component/HoneySinghSong";
import BadshahSong from "./Component/BadshaSong";
import MusicContainer from "./Component/MusicContainer";
import Registration from "./Component/auth/Forms/Registration";
import AuthLayout from "./Component/auth/AuthLayout";
import RootLayout from "./Component/root/RootLayout";
import Login from "./Component/auth/Forms/Login";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <MusicContainer/>
          <Routes>
            <Route element={<RootLayout/>}>
              <Route path="/" element={<Body />} />
              <Route path="/allmusic" element={<AllMusic />} />
              <Route path="/oldmusic" element={<OldMusic />} />
              <Route path="/trendingsong" element={<Trending />} />
              <Route path="/newsong" element={<NewSong />} />
              <Route path="/topalbum" element={<TopAlbum />} />
              <Route path="/Hindi Song" element={<HindiSong />} />
              <Route path="/English Song" element={<EnglishSongs />} />
              <Route path="/Spanish Song" element={<SpanishSong />} />
              <Route path="/South Song" element={<SouthSong />} />
              <Route path="/Motivational songs" element={<MotivationalSong />} />
              <Route path="/Punjabi songs" element={<PunjabiSong />} />
              <Route path="/Romantic songs" element={<RomanticSong />} />
              <Route path="/Top Music" element={<TopMusic />} />
              <Route path="/Arjit Singh" element={<ArjitSingh />} />
              <Route path="/Udit Narayan" element={<UditNarayan />} />
              <Route path="/Kumar Sanu" element={<KumarSanu />} />
              <Route path="/Abhijeet Bhattacharya" element={<AbhijeetSong />} />
              <Route path="/Krishnakumar Kunnath" element={<KkSong />} />
              <Route path="/Yo Yo Honey Singh" element={<HoneySinghSong />} />
              <Route path="/Badshah" element={<BadshahSong />} />
            </Route>
            
            <Route element={<AuthLayout/>}>
              <Route path="/auth" element={<Registration/>} />
              <Route path="/login" element={<Login/>} />
            </Route>
          </Routes> 
        
      </BrowserRouter>
    </Provider>
  );
}



export default App;
