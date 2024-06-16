import React 
from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";

function Footer() {
  return (
    <div className='bg-black h-[200px] text-[#fff] flex justify-center items-center flex-col'>
       <div className='bg-slate-600 w-10/12  p-4 flex justify-between'>
        
        <img className='w-[120px] h-[40px]' src={"./public/hindi.jpeg"} alt="" />
         <div className='flex justify-between items-center sm:flex-row flex-col'>
         <img className='w-[120px] h-[40px]' src={"./public/apple.png"} alt="" />
         <img className='w-[120px] h-[40px]' src={"./public/playstore.png"} alt="" />
         </div>
       </div>
    <div className='flex border-t-[1px] border-b-[1px] border-[#3c3b3b] w-10/12 justify-between mt-2 p-2'>
        <div className='w-[50%]'>
            <p>ABOUT US | 
PRIVACY POLICY | TERMS OF USE | 
CONTACT US | HELLOTUNES</p>
        </div>
        <div className='flex gap-2 items-center justify-center'>
        <FaInstagram size={"2rem"}/>
        <CiYoutube size={"2rem"}/>
        <FiTwitter size={"2rem"}/>
        <CiFacebook size={"2rem"}/>
        </div>
    </div>
    </div>
  )
}

export default Footer