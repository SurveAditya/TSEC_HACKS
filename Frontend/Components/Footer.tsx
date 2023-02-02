import Link from "next/link";
import React from "react";
// import { FaFacebook } from "react-icons/fa";
import { BsLinkedin,BsInstagram , BsTwitter, BsGithub } from "react-icons/bs";
type Props = {}

const Footer = (props: Props) => {

 
  return (
    <div className=" bg-gray-100 dark:bg-gray-900 ">
   {/* <div className="max-w-screen-xl  px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
      <div className="p-5 sm:w-8/12"> */}
        <h3 className="font-bold text-6xl text-[#25495c] text-center pt-20">DigiBart</h3>   
        <p className="m-10 px-20 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis fugit temporibus fuga voluptate, tenetur mollitia eligendi voluptatem ducimus! Ipsam, consequatur dolor reprehenderit alias ullam excepturi pariatur tempore odio odit repellendus.</p>
        <div className="flex flex-row space-x-6 justify-center text-2xl pb-10 cursor-pointer">
         <div > <BsInstagram  /></div>
         <div><BsLinkedin /></div>
         <div><BsTwitter /></div>
         <div><BsGithub /></div>
        </div>
        {/* <div className="flex text-gray-500 uppercase text-sm"></div> */}
   </div>
//        </div>
// </div>
 
  )
}

export default Footer