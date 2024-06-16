import React from 'react';
import { RiDownloadLine } from "react-icons/ri";

function PlayingMusic({ audio, image, name, singername, handleClick }) {
  // Function to handle downloading the song

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = audio; // URL to the audio file
    link.download = `${name}.mp3`; // Suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='mt-8 px-4 py-6 bg-gray-100 rounded-lg shadow-lg'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4 cursor-pointer'>
          <img className='w-16 h-16 rounded-md' src={image} alt={name} />
          <div className='sm:w-[400px] md:w-[400px] lg:w-[800px] md:flex md:justify-between md:items-center'>
            <h1 className='text-lg font-semibold text-gray-800'>{name}</h1>
            <p className='text-sm text-gray-600'>{singername}</p>
            <RiDownloadLine 
              className="cursor-pointer text-gray-600 hover:text-gray-800"
              onClick={handleDownload}
            />
          </div>
        </div>
        <button className='px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500' onClick={handleClick}>Play</button>
      </div>
    </div>
  );
}

export default PlayingMusic;
