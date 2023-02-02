"use client"
import Prodcard from 'Components/Prodcard'
import React from 'react'

type Props = {}

const Products = (props: Props) => {
  return (
    <div>
         <input className="items-center ml-132 w-96 h-12 mt-32 mb-10 flex border-2 border-black rounded-lg flex-wrap  " type="text" placeholder= "Search.." />
        <div className="flex flex-row">
            <label className="ml-132 mt-2">Min</label>
        <input className="items-center ml-6 w-16 h-10 mb-10 flex border-2 border-black rounded-lg   " type="text" placeholder= "Min" />
        <label className="ml-12 mt-2">Max</label>

        <input className="items-center ml-6 w-16 h-10 mb-10 flex border-2 border-black rounded-lg   " type="text" placeholder= "Max" />
        </div>

        <div className="flex flex-row flex-wrap">
        <Prodcard />
        <Prodcard />
        <Prodcard />
        <Prodcard />
        <Prodcard />


        </div>
    </div>
  )
}

export default Products