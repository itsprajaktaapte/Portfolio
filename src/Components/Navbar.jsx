import React, { useState } from "react";
import devpic from "/dev.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    {
      id: 1,
      text: "About",
    },
    {
      id: 2,
      text: "Experience",
    },
    {
      id: 3,
      text: "Work",
    },
    {
      id: 4,
      text: "Contact",
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={devpic} className="h-12 w-12"></img>
            <h1 className="font-semibold text-xl cursor-pointer">
              Prajakta Apte
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>

          {/* Desktop Navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {/* {mapping of object - object.map( ()=>() )} */}

              {navItems.map(({ id, text }) => (
                <li
                  className=" hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden h-screen w-full flex flex-col items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                 key={id}>
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  > 
                    {text}
                  </Link>
                 
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
