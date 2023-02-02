"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import {motion } from "framer-motion"
import { FaGithub, FaGoogle, FaInstagram, FaFacebook  } from "react-icons/fa";
import Link from "next/link";
type Props = {};
import {useSession, signIn, signOut} from 'next-auth/react'
import { useRouter } from 'next/navigation';



const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  async function handleGoogleSignIn() {
     signIn('google', {
      callbackUrl: 'http://localhost:3000/',
    })
   
  }
  async function handleEmailPasswordSignIn() {
    signIn('email', {
      callbackUrl: 'http://localhost:3000/',
    })
   
  }
  const { data, status } = useSession()
  const router = useRouter()
  
    if (status === 'authenticated') {
        router.push('/');
    }

  
  const sbmitHandler = async (e:any) => {
    e.preventDefault();
    try{
        const data = await signIn('credentials', {
          callbackUrl: 'http://localhost:3000/',
          email,
          password,
          })
          
          console.log(data);
    }catch(error){
      console.log(error);
    }
  }

  const [count, setCount] = React.useState(0);  
  return (
    <section className="bg-[#25495c] dark:bg-black ">
      <div className="px-0 py-1 mx-auto max-w-7xl sm:px-4">
        <motion.div   key={count}
      animate={{ scale: 0.9 }}
      transition={{ duration: 1 }}
      
          className="w-full px-4 pt-5 pb-6 mx-auto mt-8 mb-6 bg-white rounded-none shadow-xl sm:rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6">
           <div className="flex mx-8 justify-evenly text-3xl pb-4 border-b-2" >
            <FaInstagram  />
            <FaFacebook />
    </div>
          <h1 className="mb-4 pt-4 text-lg font-semibold text-left text-[#25495c]">
            Log in to your account
          </h1>
          <form className="mb-8 space-y-4" onSubmit={sbmitHandler}>
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">
                Your Email
              </span>
              <input
                className="form-input"
                type="email"
                placeholder="Ex. james@bond.com"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }
                }
              />
            </label>
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">
                Your Password
              </span>
              <input
                className="form-input "
                type="password"
                placeholder="••••••••"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                } 
                }
              />
            </label>
            <input
              type="submit"
              className="bg-[#e2edf2] text-[#25495c] hover:bg-[#25495c] hover:text-[#e2edf2] hover:cursor-pointer w-full py-3 mt-1 justify-center btn btn-primary"
              value="Login"
            />
          </form>
          <div className="space-y-8">
            <div className="text-center border-b border-gray-200">
              <span className="p-2 text-xs font-semibold tracking-wide text-gray-600 uppercase bg-white ">
                Or
              </span>
            </div>
            <div className="grid grid-cols-2  gap-4 justify-center">
              <button onClick={handleGoogleSignIn} className="py-3 btn bg-[#e2edf2] text-[#25495c] hover:bg-[#25495c] hover:text-[#e2edf2] hover:cursor-pointer btn-icon btn-google ">
               <FaGoogle className="mr-1 text-2xl"/>
                <span className="sr-only ">Continue with</span> Google
              </button>
              {/* <a href="#" className="py-3 btn btn-icon bg-[#e2edf2] text-[#25495c] hover:bg-[#25495c] hover:text-[#e2edf2] hover:cursor-pointer btn-dark">
                <FaGithub className="mr-1 text-2xl"/>
                <span className="sr-only">Continue with</span> Github
              </a> */}
            </div>
          </div>
        </motion.div>
        <p className="mb-4  text-xs text-center text-gray-400">
          <Link href="/register" className="text-[#e2edf2]  underline hover:text-white">
            Create an account
          </Link>
          ·
          
          ·
          <a href="#" className="text-[#e2edf2] underline ">
            Privacy & Terms
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;
