import React from 'react'
import { useEffect, useRef } from 'react'
import { GiBuyCard } from 'react-icons/gi'
import {MdOutlineSell} from 'react-icons/md'
type Props = {}

const Page = (props: Props) => {


    return (
        <div>
      <div className='flex justify-center items-center '>
      
          <div >
            <h1 className='text-6xl mr-56 justify-center'>
                        DigiBart
                        <p>
                            Sell Simply, Buy Safely
                        </p>
            </h1>
          </div>
          <div className=''>
              <img src="https://o.remove.bg/downloads/db0968b4-144a-4453-a8b4-93670e76c929/Img-removebg-preview.png" alt="" />
          </div>
            </div>
            <div className='flex flex-row justify-evenly my-16'>
                <div className=' flex  flex-col items-center ' >
                    <GiBuyCard  className='text-5xl mb-8 ' />
                    <p className='text-center'>
                        Sell you product and become a contributor
                    </p>

                    <p className='px-16 text-center py-10'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae beatae ab, aliquam temporibus inventore exercitationem aliquid commodi vero nemo qui iure, sunt reprehenderit incidunt hic? Repellat vero quam sit ut.
                    </p>
                </div>
                <div className='flex  flex-col items-center border-l-4'>
                    <MdOutlineSell className='text-5xl text-center mb-8  '/>
                    <p className=''>
                        Get a product in exchange of your product
                    </p>   
                    
                    <p className='px-16 text-center py-10'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cumque quam necessitatibus, soluta aperiam beatae eos dolore, at officia id repellendus minima eligendi ut recusandae rerum vel odit, eius quia.
                    </p>
                </div>
                
            </div>
            </div>
          
  )
}

export default Page