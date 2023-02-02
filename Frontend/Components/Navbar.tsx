"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSession , signOut} from "next-auth/react";
import { WiAlien } from "react-icons/wi";
import { BsMenuButton, BsMenuButtonFill } from "react-icons/bs";
import {TfiMenu} from "react-icons/tfi";
import { FaMoon, FaSun } from "react-icons/fa";
type Props = {};

const Navbar = (props: Props) => {
  const {data} = useSession();
 

  const [currTheme, setcurrTheme] = useState("");
  const clickHandler = () => {
    if (localStorage.theme === "dark") localStorage.theme = "light";
    else localStorage.theme = "dark";
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setcurrTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setcurrTheme("light");
    }
  };
  useEffect(() => {
    
    clickHandler();
  }, []);

  const [menu, setMenu] = useState("hidden");
  

  // add event listners

  return (
    <nav className="bg-[#25495c]  dark:bg-gray-900 sticky top-0 z-50">
      <div className="xl:max-w-6xl mx-auto pt-0 px-4 h-20">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <Link href="/" className="flex items-center py-2 v7f text-white">
                <motion.div
                  animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                  }}
                >
                 <WiAlien className="text-6xl  dark:text-blue-500"/>
                </motion.div>
                <span className="font-bold">DigiBart</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <Link
                href="/dashboard"
                className="py-5 px-3 ml-10 text-white hover:text-xl transition-all  "
              >
                Dashboard
              </Link>
              {/* <a
                href=""
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                
              </a> */}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
          {/* right side */}
                {/* <h1 className="text-white"> {data.user.name}</h1> */}
                <button
                  onClick={clickHandler}
                  className="py-2 px-3 bg-black-400 hover:bg-white dark:bg-black text-sky-400 hover:text-white-800 rounded transition duration-500 border-white border-2"
                >
                  {currTheme === "dark" ? <FaMoon/>:<FaSun/>}
                </button>

                <div className="relative inline-block hover:bg-pink ">
                      <img src="https://www.w3schools.com/w3images/avatar6.png" className="border-white border-2 cursor-pointer h-10 w-10 rounded-full ml-10"></img>
                      <div className="hidden absolute  z-1"> 
                      {data?.user ? (
                        <div className="flex flex-row items-center ">
                      
                        <Link href="/login" className="py-5 px-3" onClick={signOut}>
                          Logout
                        </Link>
                    
                        </div>
                        
                      ) : (
                        <>
                          <Link href="/login" className="py-5 px-3">
                            Login
                          </Link>

                          <Link
                            href="/register"
                            className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
                          >
                            Signup
                          </Link>
                        </>
                      )}

                </div>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="mobile-menu-button "
              onClick={() => {
                if (menu === "hidden") setMenu("block");
                else setMenu("hidden");
                
              }}
            >
              <TfiMenu/>
            </button>
          </div>
        </div>
      </div>
      <div className="mobile-menu hidden md:hidden">
        <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Features
        </a>
        <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">
          {" "}
          Pricing
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
