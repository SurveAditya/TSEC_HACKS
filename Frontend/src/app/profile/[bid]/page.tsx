"use client";
import Cards from "Components/Cards/Cards";
import Mountain from "../../../../assets/mountain.jpg";
import River from "../../../../assets/river.jpg";
import PieChart from "react-js-pie-chart";


import UserCard from "Components/UserCard";
import React from "react";
type Props = {};

const Profile = (props: Props) => {
  const size = 1;
  const userId = "PrateekID";
  const name = window.location.href.split("/")[4];
  
  const product = [
    {
      img: "https://apollo-singapore.akamaized.net/v1/files/3mlqffyra3423-IN/image;s=780x0;q=60",
      isMemberOnly: false,
      title: "15 Games XBOX ONE 1TB Black Colour Brand new Condition Good working 1",
      desc: "15 Games XBOX ONE 1TB Black Colour Brand new Condition Good working 2 Year old With Original wireless controller 1 And All cables Games are inside Good working Fixed price",
      autherImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      autherName: "Vaibhav Gawad",
      dateOfPost: "Aug 18",
      rangeStart: 0,
      rangeEnd: 10,
      pid:"12312312"
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
      rangeStart: 0,
      rangeEnd: 10,
      pid:"1231231212"
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
      rangeStart: 10,
      rangeEnd: 20,
      pid:"123121231232"
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
      rangeStart: 10,
      rangeEnd: 122,
      pid:"22312312"
    },
  ];
  return (
    <div className="max-w-[1420px] mx-auto flex flex-col  ">
      <div className="flex gap-2 p-2">
        <div className=" p-2 ">
          <UserCard
            userImage={
              "https://api.multiavatar.com/" +name+ ".svg"
            }
            userName={name}
            userEmail="gawadvaibhavv@gmail.com"
            postCount={10}
          />
        </div>
        <div className="w-2/3  antialiased border-1  bg-white border border-gray-200 rounded-lg shadow-md" >
       
          <div className="flex justify-center text-center w-full h-full ">
                    
              </div>
          </div>
       
      </div>

      <div className="w-full space-y-3 p-4 ">
        <h1 className="text-2xl lg:text-4xl  text-center	 font-bold text-black dark:bg-red-700">
          
       My Listing
        </h1>

        {/* {size === 0 ? (
          userId === user ? (
            <>
              <p className="text-2xl">Your Blogs,</p>
              <p className="text-2xl">You have not created any blogs yet</p>
            </>
          ) : (
            <>
              <p className="text-2xl">{user} Blogs,</p>
              <p className="text-2xl">
                This user has not created any blogs yet
              </p>
            </>
          )
        ) : ( */}
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <!--Card 1--> */}

          {product &&
            product?.map((blog, id) => {
              return <Cards key={id} blog={blog} />;
            })}
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default Profile;
