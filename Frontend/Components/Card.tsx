import React from 'react'
import {motion} from 'framer-motion'
type Props = {}

const Cards = (props: Props) => {
  return (

<motion.article  whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} className="overflow-hidden rounded-lg shadow-lg">

    <a href="#">
        <img alt="Placeholder" className="block h-auto w-full" src="https://www.teahub.io/photos/full/120-1202661_amazing-simple-house-design-in-the-philippines-19.jpg"/>
    </a>

    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="#">
                Casa de Praia
            </a>
        </h1>
        <p className="text-grey-darker text-sm">
            11/4/22
        </p>
    </header>

    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
        <a className="flex items-center no-underline hover:underline text-black" href="#">
            <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"/>
            <p className="ml-2 text-sm">
                Autor
            </p>
        </a>
        <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
            <span className="hidden">Like</span>
            <i className="fa fa-heart"></i>
        </a>
    </footer>

</motion.article>
  )
}

export default Cards