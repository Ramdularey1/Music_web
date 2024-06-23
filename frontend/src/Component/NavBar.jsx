import React, { useEffect, useState, useRef } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { updateAllSong } from '../utils/allSongsSlice';

function NavBar() {
  const dispacher = useDispatch()
  const allSongs = useSelector(store => store.name.allSongs);

    useEffect(() => {
        const fetchSong = async () => {
          try {
            const response = await axios.get("https://music-web-musicapi.vercel.app/api/v1/users/getmusic")
            
            
            dispacher(updateAllSong(response.data.data));
            console.log("nav", allSongs);
          } catch (error) {
            console.log(error)
    
          }
    
        }
    
        fetchSong()
      }, []);

     




    const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth <= 576);
    const [isOpen, setIsOpen] = useState(false);
    const logoutRef = useRef(null);

    const handleOpen = (event) => {
        // Prevent event propagation to avoid closing the logout button immediately
        event.stopPropagation();
        setIsOpen(true);
    };

    // const handleClose = () => {
    //     setIsOpen(false);
    // };

    const handleResize = () => {
        setIsSmallDevice(window.innerWidth <= 576);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        document.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (logoutRef.current && !logoutRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    return (
        <div className='flex justify-between bg-[#3c3a3a] h-[61px] items-center text-[#ffff]'>
            <div className='ml-[24px]'>
                <Link to = "/"><p className=''>Logo</p></Link>
            </div>
            <div className='lg:w-[40%] w-[60%] mr-[24px] flex justify-between'>
                {isSmallDevice ? (
                    <div className='absolute right-10 top-[13px]'>
                        <RxHamburgerMenu onClick={handleOpen} size={"2rem"} />
                    </div>
                ) : (
                    <>
                        <div>
                            <input className='text-black lg:w-[320px] h-[30px] rounded outline-none p-[4px] ' type="text" />
                        </div>
                        <div>
                            <button className='lg:mr-[50px] mr-[34px]'>Login</button>
                        </div>
                    </>
                )}
                {isOpen && (
                    <div ref={logoutRef} className='absolute text-white right-4 top-[65px] bg-[#3c3a3a] p-4 rounded cursor-pointer'>
                        Logout
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavBar;
