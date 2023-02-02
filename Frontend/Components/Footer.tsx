import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
type Props = {}

const Footer = (props: Props) => {
  return (
    <div className=" bg-gray-100 dark:bg-gray-900 ">
   <div className="max-w-screen-xl  px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
      <div className="p-5 sm:w-8/12">
        <h3 className="font-bold text-3xl text-indigo-600 mb-4">Lesss Gooo</h3>
        
        <div className="flex text-gray-500 uppercase text-sm">
          <a href="#" className="mr-2 hover:text-indigo-600">Home</a>
          <a href="#" className="mr-2 hover:text-indigo-600">Blog</a>
          <a href="#" className="mr-2 hover:text-indigo-600">Projects</a>
          <a href="#" className="mr-2 hover:text-indigo-600">About</a>
        </div>
       </div>
     <div className="p-5 sm:w-4/12">
       <h3 className="font-medium text-lg text-indigo-600 mb-4">Subscribe to Newsletter</h3>
       <form className="mt-4">
      <input className="border rounded w-full px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="username@email.com"/>
      </form>
     </div>
   </div>
 
</div>
 
  )
}

export default Footer