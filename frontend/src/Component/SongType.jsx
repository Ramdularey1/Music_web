import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SongType(props) {
  const [route, setRoute] = useState("");

  const handleClick = (item) => {
    setRoute(item);
  };

  // useEffect(() => {
  //   console.log("Route updated:", route);
  // }, [route]);

  useEffect(() => {
    // This effect triggers when route changes and updates the link
    setRoute(props.name); // Set the initial route
 
  }, [props.name]);
  
  return (
    <div className='ml-[20px] flex items-center justify-center'>
      <Link to={route}>
        <div
          onClick={() => handleClick(props.name)}
          className=' w-[200px] h-[250px] ml-[10px] rounded flex flex-col justify-center items-center gap-3'>
          <img className='h-[200px] object-fill rounded' src={props.url} alt="" />
          <p>{props.name}</p>
        </div>
      </Link>
    </div>
  );
}

export default SongType;
