import React from 'react'
import ArtistItem from './ArtistItem'
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { useRef } from 'react';
import { singerDetails } from '../../constant';

function Artist() {

    const boxRef = useRef(null);

  const btnPressPrev = () => {
    const box = boxRef.current;
    if (box) {
      const width = box.clientWidth;
      box.scrollLeft -= width;
    }
  };

  const btnPressNext = () => {
    const box = boxRef.current;
    if (box) {
      const width = box.clientWidth;
      box.scrollLeft += width;
    }
  };

  return (
    <div className='ml-[-40px]  flex flex-col justify-center'>
      <div className='bg-red-900 flex relative'>
      <GoArrowLeft
        onClick={btnPressPrev}
        size={"2rem"}
        className='absolute left-[30px] top-[150px]   bg-[#4b4949] text-[#ffff] rounded-full'
      />
      <GoArrowRight
        onClick={btnPressNext}
        size={"2rem"}
        className='absolute right-[30px] top-[150px]   bg-[#4b4949] text-[#ffff] rounded-full'
      />
      </div>
      <h1 className='ml-[35px] md:ml-[79px] text-24 font-500 mt-[10px] text-[24px]'>Top Singer</h1>
      <div className='flex justify-start items-center md:mx-10 overflow-x-auto scrollbar-hide my-6  p-2 scroll-smooth' ref={boxRef}>
        {singerDetails.map((item) => {
          return(
            <ArtistItem
            key = {item.id}
            name = {item.name}
            url = {item.imgUrl}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Artist