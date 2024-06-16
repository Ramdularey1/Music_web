import React, { useRef } from 'react';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import CarouselCard from './CarouselCard';
import { topalbum } from '../../../constant';

function Carousel() {
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
    <>
    {/* <h1 className='text-black mt-[10px] ml-[30px] text-[30px]'>Popular Song</h1> */}
    <div className='mt-[20px] flex overflow-x-scroll scrollbar-hide carousel scroll-smooth' ref={boxRef}>
      
      <GoArrowLeft
        onClick={btnPressPrev}
        size={"2rem"}
        className='absolute left-8 top-[220px] md:top-[260px] bg-[#4b4949] text-[#ffff] rounded-full'
      />
      <GoArrowRight
        onClick={btnPressNext}
        size={"2rem"}
        className='absolute right-4 top-[220px] md:top-[260px] bg-[#4b4949] text-[#ffff] rounded-full'
      />
      {/* <CarouselCard /> */}

      {topalbum.map((items) => {
        return(
          <CarouselCard 
          key = {items.id}
          url = {items.imageUrl}
          /> 
        )
      })}
 
      
    </div>
    </>
  );
}

export default Carousel;
