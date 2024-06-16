import React from 'react'

function CarouselCard(props) {
  return (
    <div className=' min-w-[430px]  h-[220px] m-4 rounded md:min-w-[700px] md:h-[300px] mt-[-10px] flex justify-center items-center'>

        <img  src={props.url} alt="" />
        
    </div>
  )
}

export default CarouselCard