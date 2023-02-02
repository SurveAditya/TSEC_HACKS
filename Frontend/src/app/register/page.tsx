"use client";
import React from "react";
import { useState } from "react";
import {motion } from "framer-motion"
import { FaGithub, FaGoogle } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
type Props = {};

const Register = (props: Props) => {
  const [count, setCount] = React.useState(0);  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const[name, setName] = useState("");

  const submitHandler = async (e:any) => {
    e.preventDefault();
    // console.log(email, password, password2, name);
    try{
        const {data} = await  axios.post('/api/register', {
          name,email, password
        })
        console.log(data);
    }catch(error){
      console.log(error);
    }


  };

  const { data, status } = useSession()
  const router = useRouter()
  
    if (status === 'authenticated') {
        router.push('/');
    }



  return (
    <section className="bg-purple-900 dark:bg-black ">
      <div className="px-0 mx-auto py-1 max-w-7xl sm:px-4">
        <motion.div   key={count}
      animate={{ scale: 0.9 }}
      transition={{ duration: 1 }}
      
   className="w-full px-4 pt-5 pb-6 mx-auto mt-8 mb-6 bg-white rounded-none shadow-xl sm:rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6">
          <h1 className="mb-4 text-lg font-semibold text-left text-gray-900">
            Log in to your account
          </h1>
          <form className="mb-8 space-y-4" onSubmit={submitHandler}>
          <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">
                Your Name
              </span>
              <input
                className="form-input"
                type="text"
                placeholder="Ex. FirstName LastName"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }
                }
              />
            </label>
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
                }}
              />
            </label>

            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">
                Confirm Password
              </span>
              <input
                className="form-input "
                type="password2"
                placeholder="••••••••"
                required
              />
            </label>
            <input
              type="submit"
              className="bg-blue-200 w-full py-3 mt-1 justify-center btn btn-primary"
              value="Register"
            />
          </form>
          <div className="space-y-8">
            <div className="text-center border-b border-gray-200">
              <span className="p-2 text-xs font-semibold tracking-wide text-gray-600 uppercase bg-white ">
                Or
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <a href="#" className="py-3 btn btn-icon btn-google ">
               <FaGoogle className="mr-1 text-2xl"/>
                <span className="sr-only">Continue with</span> Google
              </a>
              <a href="#" className="py-3 btn btn-icon btn-dark">
                <FaGithub className="mr-1 text-2xl"/>
                <span className="sr-only">Continue with</span> Github
              </a>
            </div>
          </div>
        </motion.div>
        <p className="mb-4  text-xs text-center text-gray-400">
          <Link href='/login' className="text-purple-200 underline hover:text-white">
            Have An Account ? Login
          </Link>
          ·
          
          ·
          <a href="#" className="text-purple-200 underline hover:text-white">
            Privacy & Terms
          </a>
        </p>
      </div>
    </section>
  );
};

export default Register;
