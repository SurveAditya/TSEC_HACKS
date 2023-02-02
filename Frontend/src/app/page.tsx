
"use client";
import styles from './page.module.css'
import React, { useEffect, useState } from "react";
import "./globals.css";
import Card from 'Components/Card';
import { motion } from "framer-motion"

export default function Home() {

  const clickHandler = () => {
    if (localStorage.theme === "dark") localStorage.theme = "light";
    else localStorage.theme = "dark";
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  
  const [bid, setBid] = useState("");
  useEffect(() => {
    clickHandler();
  }, []);


  return (
    <main className={styles.main} >
      {/* <form></form> */}
      <div className='bg-gray-100 dark:bg-gray-900 w-full h-full'>
        <motion.div  initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} className='flex flex-row space-x-10 p-10'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </motion.div>
      </div>
    </main>
  )
}
