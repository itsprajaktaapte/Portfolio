import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiIndeed } from "react-icons/si";

function Footer() {
    return (
        <>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md top-0 left-0 right-0 z-50 bg-white'>
        <div className='flex items-center mx-auto'>
          <ul className='flex items-center mx-auto space-x-5 space-y-0 p-3 '>
             {/* <li>{" "}<FaGithub className=' text-black text-xl text-3xl cursor-pointer'/></li>
             <li>{" "}<FaLinkedin className=' text-black text-xl text-3xl cursor-pointer'/></li>
             <li>{" "}<SiIndeed className=' text-black text-xl text-3xl cursor-pointer'/></li> */}
             <span className='text-xs'>&copy; Designed & Developed by  Prajakta Apte</span>
           </ul>  
          
          </div>
        </div>
        </>
    )
}

export default Footer
