import React from 'react'
import {motion} from 'framer-motion'
type Props = {}

const Cards = (props: Props) => {
  return (
<div  className="card-zoom w-full lg:max-w-full lg:flex dark:bg-gray-800 dark:border-gray-700"
      // onClick={(e) => handleClick(e, blog.title)}
    >
<article   className="overflow-hidden rounded-lg shadow-lg">

    <a href="#">
        <img alt="Placeholder" className="block h-auto w-full" src="https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
    </a>

    <header className="flex flex-col items-center justify-between leading-tight font-bold   text-[#25495c] p-2 md:p-4">
        <h1 className="text-lg">
            <a className=" no-underline hover:underline " href="#">
              Phone
            </a>
        </h1>
              <p className='py-2'>
                  Phone is 5 years old, and it's in a good working condition
        </p>
    </header>

    <footer className="flex flex-col items-center justify-between  leading-none p-2 md:p-4">
        <a className="flex items-center pb-2 no-underline hover:underline text-black" href="#">
           <span className='font-bold text-lg text-[#25495c] '>Range: </span><p className='text-[#25495c] '> Rs.10,000-Rs.15,000 </p>
              </a>
              
              <a className="flex items-center no-underline hover:underline text-black" href="#">
           <span className='font-bold text-lg text-[#25495c] '>Location: </span><p className='text-[#25495c] '> Mumbai </p>
        </a>
       
    </footer>

      </article>
      </div>
  )
}

export default Cards
