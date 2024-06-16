import React, {useState } from 'react';
import PlayingMusic from './PlayingMusic';
import Music from './Music';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateCurrentSong } from '../utils/currentMusicSlice';



function AllMusic() {
  const dispatcher = useDispatch();
  const allSongs = useSelector(store => store.name.allSongs);
  //  const currentSong = useSelector(store => store.currentMusic.currentSong);
 
  


  const [selectedMusic, setSelectedMusic] = useState(null);
  console.log(selectedMusic)
  const handlePlay = (items) => {

    setSelectedMusic(items)
    console.log(items);
    dispatcher(updateCurrentSong(items))
  }

  
//  console.log(currentSong)
  return (
    <>
      <div className='flex justify-center items-center p-4 mt-2'>


        <div className=' w-10/12  '>
          <div className='w-[200px] flex relative'>
            <img className='w-[120px]  h-auto sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[400px]' src={"./public/hindi.jpeg"} alt="noimage" />
            <div className='flex items-center flex-col'>
              <h1 className=' p-4 md:w-[200px] text-[22px] lg:w-[250px]'>Trending in Hindi</h1>
              <button className='absolute bottom-0 w-[90px] h-[30px] rounded bg-slate-200'>Play Song</button>

            </div>
          </div>

          {allSongs.map((items) => {
            return (
              <PlayingMusic
                key={items._id}
                image={items.musicImage}
                name={items.musicName}
                singername={items.singerName}
                audio={items.musicAudio}
                handleClick={() => handlePlay(items)}
              />
            )
          })}

        </div>


      </div>
      {selectedMusic && <Music musicData={selectedMusic} />}
    </>
  );
}

export default AllMusic;
