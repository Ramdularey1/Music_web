import React, {  useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import PlayingMusic from './PlayingMusic';
import Music from './Music';
import { updateCurrentSong } from '../utils/currentMusicSlice';




function EnglishSongs() {
  const dispatcher = useDispatch();
  const allSongs = useSelector(store => store.allSongs.allSongs);

 
  const oldSongs = allSongs.filter((item) => {
    return item.category === "663e7844494dfb91934a0290"
  })


  const [selectedMusic, setSelectedMusic] = useState(null);
  
  const handlePlay = (items) => {

    setSelectedMusic(items)
    dispatcher(updateCurrentSong(items))
  }


console.log("redux",oldSongs)





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

          {oldSongs.map((items) => {
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
  )
}

export default EnglishSongs