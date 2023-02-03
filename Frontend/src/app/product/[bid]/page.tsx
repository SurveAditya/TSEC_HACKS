"use client";
import React, { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/Ai";
import { useState } from "react";
import Prodcard from "../../../../Components/Prodcard";
import { Modal } from "@material-ui/core";
import { useRouter } from "next/router";
import axios from "axios";
import email from "next-auth/providers/email";

type Props = {};

const  Product = (props: Props) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };




  const _id = location.pathname.split("/")[2];
  // console.log(_id);
  const [data, setData] = useState({
    _id: "",
    productname: "",
    range:[0,0],
    description: "",
    images: [" "],
    category: "",
    city: "Mumbai",

  });

 


    
  // console.log("vaibhav" ,vaibhav.data.data);
  // const [data, setData] = useState([]);
  
 
  

  const handleSubmit = async (e: any) => {
  
    // console.log(emaill);
    const vaibhav = await axios.post("http://localhost:5000/users/getProductBypId",{pId: _id}).then((res) => {
      setData(res.data.data);
    });
    // console.log(vaibhav.data.data);
    // console.log("vaibhav" ,vaibhav);

  };
  console.log(data);
  return (
    <div>
      <Modal onClose={handleClose} open={open} >
        <div className="transition-all duration-500 h-[24rem]  flex w-128 flex-col shadow-2xl border-2 rounded-xl border-black-300 bg-white flex mx-[470px] mt-48">
         
          <div className="h-[5rem] flex w-100  border-2 rounded-xl border-black-300 bg-white flex">
            <div className=" w-1/4 border-r-2 border-grey-400">
              <img
                src={' '}
                className="h-16 pl-6 mt-2"
              ></img>
            </div>


            <div className="flex flex-row items-left">
              <div className="text-sm text-left ml-4 mt-8 pr-2">
                Product is watch
              </div>
              <div className="text-sm text-left mt-8  ml-2">Rs. 120</div>
              <button className="border-black border-2 rounded-lg w-36 text-sm h-10 ml-20 mt-5 bg-[#25495c] text-white hover:bg-white hover:text-black transition-all duration-500  ">
                Trade
              </button>
            </div>
          </div>
          <div className="h-[5rem] flex w-100  border-2 rounded-xl border-black-300 bg-white flex">
            <div className=" w-1/4 border-r-2 border-grey-400">
              <img
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80"
                className="h-16 pl-6 mt-2"
              ></img>
            </div>

            <div className="flex flex-row items-left">
              <div className="text-sm text-left ml-4 mt-8 pr-2">
                Product is watch
              </div>
              <div className="text-sm text-left mt-8  ml-2">Rs. 120</div>
              <button className="border-black border-2 rounded-lg w-36 text-sm h-10 ml-20 mt-5 bg-[#25495c] text-white hover:bg-white hover:text-black transition-all duration-500  ">
                Trade
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <button onClick={handleSubmit}> Hello</button>

      <div  className="transition-all duration-500 h-[30rem] flex w-200 shadow-2xl border-2 rounded-xl border-black-300 bg-white flex mx-[380px] mt-10 mb-10">
     
        <div className=" w-1/2 border-r-2 border-grey-400">

          <img
            src={data.length >= 1 ?   data.images[0]  :data.images[0]}
          ></img>
          <div className="text-20 text-center mt-12 text-3xl">Watch</div>
        </div>

        <div className="flex flex-col items-left">
          <div className="text-left ml-12 mt-10 text-2xl ">
            {data.productname} <br />
            <span className="text-sm"></span>
          </div>
          <div className="text-left ml-12 mt-4 text-2xl">
            Description :   <br />
            <span className="text-sm">{data.description}</span>
          </div>
          <div className="text-left ml-12 mt-4 text-2xl">
            Range <br />
            <span className="text-sm">Rs.{data.range[0]} - Rs.{data.range[1]}</span>
          </div>
          <div className="text-left ml-12 mt-4 text-2xl">
            City <br />
            <span className="text-sm">Mumbai</span>
          </div>
          <button
            className="border-black border-2 rounded-lg w-36 text-sm h-10 ml-20 mt-10 bg-[#25495c] text-white hover:bg-white hover:text-black transition-all duration-500 "
            onClick={handleOpen}
          >
            Request Exchange
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
