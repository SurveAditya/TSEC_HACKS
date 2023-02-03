"use client"
import React, { useState } from 'react'
// import Modal from '@material-ui/core/Modal';
import { Modal } from '@material-ui/core'
import { useRouter } from 'next/navigation'

type Props = {
  product: any
}
const Prodcard = (props: Props) => {
  // const [data, setData] =  useState([]);
  //   setData(props?.product);
    console.log(props?.product);
    const [open, setOpen] = React.useState(false);
    const router =  useRouter();
    const id = '123123'
  const handleClose = () => {
    setOpen(false);
  };
    
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClick=()=>{
    router.push(`/product/${props?.product._id}`)
  }

  return (

<div>

        <article  onClick={handleClick} className="overflow-hidden rounded-lg shadow-lg w-80 h-96 ml-10 mb-20">

    <a href="#">
        <img alt="Placeholder" className="block h-48 w-full" src={props.product.images[0] === undefined ? ' ' :props.product.images[0] }/>
    </a>

    <header className="flex flex-col  justify-between leading-tight font-bold   text-[#25495c] p-2 md:p-4">
        <h1 className="text-lg">
            <a className=" no-underline hover:underline " href="#">
              {props?.product.productname}
            </a>
        </h1>
              <p className='py-2'>
                  {props?.product.description}
        </p>
    </header>

    <footer className="flex flex-col items-center  justify-between  leading-none ">
        <a className="flex items-center pb-2 no-underline hover:underline text-black" href="#">
           <span className='font-bold  text-lg text-[#25495c] '>Range: </span><p className='text-[#25495c] '> Rs.{props?.product.range[0]}-Rs.{props?.product.range[1]} </p>
              </a>
              
              <a className="flex items-center no-underline hover:underline text-black" href="#">
           <span className='font-bold text-lg  text-[#25495c] '>Location: </span><p className='text-[#25495c] '> Mumbai </p>
        </a>
       
    </footer>

</article>


      {/* <Modal
        onClose={handleClose}
        open={open}>
    
        <div className="transition-all duration-500 h-[24rem] flex w-128  shadow-2xl border-2 rounded-xl border-black-300 bg-white flex mx-[470px] mt-56">
        <div className=" w-1/2 border-r-2 border-grey-400">
        <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80" className="rounded-xl h-48 ml-20 mt-16"></img>
        <div className="text-20 text-center mt-12 text-3xl">Watch</div>
    </div>

    <div className="flex flex-col items-left">
        <div className="text-left ml-12 mt-6 text-xl ">Description <br /><span className="text-sm">the product is a watch.</span></div>
        <div className="text-left ml-12 mt-4 text-xl">Age <br /><span className="text-sm">12 years</span></div>
        <div className="text-left ml-12 mt-4 text-xl">Range <br /><span className="text-sm">Rs.10000 - Rs.20000</span></div>
        <div className="text-left ml-12 mt-4 text-xl">Price <br /><span className="text-sm">Rs.15000</span></div>
        <button className="border-black border-2 rounded-lg w-36 text-sm h-10 ml-20 mt-5 bg-[#25495c] text-white hover:bg-white hover:text-black transition-all duration-500  ">Request Exchange</button>
    </div>
</div>
      </Modal> */} 


    
<Modal
        onClose={handleClose}
        open={open}>
    
        <div className="transition-all duration-500 h-[24rem]  flex w-128 flex-col shadow-2xl border-2 rounded-xl border-black-300 bg-white flex mx-[470px] mt-56">
          <div className="h-[5rem] flex w-100  border-2 rounded-xl border-black-300 bg-white flex">
        <div className=" w-1/4 border-r-2 border-grey-400">
        <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80" className="h-16 pl-6 mt-2"></img>
        
    </div>

    <div className="flex flex-row items-left">

        <div className="text-sm text-left ml-4 mt-8 pr-2">Product is watch</div>
        <div className="text-sm text-left mt-8  ml-2">Rs. 120</div>
        <button className="border-black border-2 rounded-lg w-36 text-sm h-10 ml-20 mt-5 bg-[#25495c] text-white hover:bg-white hover:text-black transition-all duration-500  ">Trade</button>
        

    </div>
    </div>
    <div className="h-[5rem] flex w-100  border-2 rounded-xl border-black-300 bg-white flex">
        <div className=" w-1/4 border-r-2 border-grey-400">
        <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80" className="h-16 pl-6 mt-2"></img>
        
    </div>

    <div className="flex flex-row items-left">

        <div className="text-sm text-left ml-4 mt-8 pr-2">Product is watch</div>
        <div className="text-sm text-left mt-8  ml-2">Rs. 120</div>  
        <button className="border-black border-2 rounded-lg w-36 text-sm h-10 ml-20 mt-5 bg-[#25495c] text-white hover:bg-white hover:text-black transition-all duration-500  ">Trade</button>
        

    </div>
   </div>
</div>



      </Modal>



     
</div>
  )
}
export default Prodcard

