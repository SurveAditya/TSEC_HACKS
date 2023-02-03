"use client";
import Mountain from "../../../../assets/mountain.jpg";
import River from "../../../../assets/river.jpg";
import React, { useEffect, useState } from "react";
import Cards from "Components/Cards/Cards";
import axios from "axios";
import { useSession } from "next-auth/react";


type Props = {};

const  MyList = (props: Props) => {
  const [userEmail, setUserEmail] = useState("");
  const [product, setProduct] = useState([]);
  
  const products = [
    {
      img: Mountain.src,
      isMemberOnly: false,
      title: "Best Mountain Trails 2020",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      autherImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      autherName: "Vaonav",
      dateOfPost: "Aug 18",
    },
    {
      img: River.src,
      isMemberOnly: false,
      title: "15 Rivers In Norway",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      autherImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      autherName: "Karen Johnson",
      dateOfPost: "Aug 10",
    },
    {
      img: Mountain.src,
      isMemberOnly: true,
      title: "Best Mountain Trails 2020",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      autherImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      autherName: "John Smith",
      dateOfPost: "Aug 18",
    },
    {
      img: River.src,
      isMemberOnly: false,
      title: "15 Rivers In Norway",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      autherImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      autherName: "Karen Johnson",
      dateOfPost: "Aug 10",
    },
  ];

  const { data } = useSession();
  
  
  const handleSubmit = async (e: any) => {
    
    const email = data?.user?.email;
    // console.log(emaill);
    const vaibhav = await axios.post("http://localhost:5000/users/findUserByEmail",{userEmail: email});
    // console.log(vaibhav.data.data);
    console.log("vaibhav" ,vaibhav);
    const dataa = await  axios.post("http://localhost:5000/users/getProductsById",{
     
        userId: vaibhav.data.data,
        
        });
    // console.log("vaibhaasdfv" ,dataa.data.data);
    setProduct(dataa.data.data);
  };
  
  
  return (
    <section className="bg-white dark:bg-gray-900 max-w-[1420px] mx-auto flex justify-between items-center p-4 mt-12">
      <div className="py-2 px-4 mx-auto max-w-screen-xl lg:py-2 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h1 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            My Listing
          </h1>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Welcome to our My List sections! Here you'll find all Your Listings of product.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* <!--Card 1--> */}

          {product &&
            product?.map((blog, id) => {
              return <Cards key={id} blog={blog} />;
            })}
        </div>
      </div>
      <button onClick={handleSubmit}>Hello</button>
    </section>
  );
};

export default MyList;
