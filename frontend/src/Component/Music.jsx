import React from 'react';

function Music({ musicData }) {
    console.log(musicData.musicAudio);

    return (
        <div className='fixed bottom-0 left-0 w-full bg-white p-3 flex justify-center items-center gap-3'>
            <img className='w-[80px] h-[80px] rounded-full' src={musicData.musicImage} alt="" />
            <audio className='w-9/12' key={musicData.musicAudio} controls>
                <source src={musicData.musicAudio} type="audio/mpeg" />
            </audio>
        </div>
    );
}

export default Music;
