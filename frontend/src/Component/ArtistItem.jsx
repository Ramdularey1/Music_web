import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ArtistItem(props) {
  const [singerName, setSingerName] = useState();

  const handleClick = (item) => {
    setSingerName(item);
  }
  
  useEffect(() => {
    setSingerName(props.name);
  },[props.name])

  console.log(singerName);

  



  return (
    <div className='ml-[20px] flex items-center justify-center'>
         <Link to = {singerName}>
         <div
         onClick={() => handleClick(props.name)}
         className=' w-[200px] h-[250px] ml-[10px] flex flex-col gap-2 justify-center items-center'>
              <img className='w-[200px] h-[200px] rounded-full' src={props.url} alt="" />
              <p className=''>{props.name}</p>
            </div>
         </Link>
    </div>
  )
}

export default ArtistItem