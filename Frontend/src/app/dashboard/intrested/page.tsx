"use client";
import Mountain from "../../../../assets/mountain.jpg";
import River from "../../../../assets/river.jpg";
import React, { useEffect, useState } from "react";
import AcceptCard from "Components/Cards/AcceptCard";
type Props = {};

const Bookmarked = (props: Props) => {
  const [userEmail, setUserEmail] = useState("");
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);
 
  
  const product = [
    {
      img: Mountain.src,
      isMemberOnly: false,
      title: "Best Mountain Trails 2020",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      autherImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      autherName: "Vaibhav Gawad",
      dateOfPost: "Aug 18",
    },
    {
      img: River.src,
      isMemberOnly: false,
      title: "15 Rivers In Norway",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      autherImg:
        "",
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
  useEffect(() => {
    if (userEmail.length > 0) {
      fetch(`/api/user/bookmark?userEmail=${userEmail}`)
        .then((res) => res.json())
        .then((data) => {
          setBookmarkedBlogs(data);
        });
    }
  }, [userEmail]);
  return (
    <section className="bg-white dark:bg-gray-900 max-w-[1420px] mx-auto flex justify-between items-center p-4 mt-12">
      <div className="py-2 px-4 mx-auto max-w-screen-xl lg:py-2 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h1 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Interested Users
          </h1>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Welcome to our bookmarked blog section! Here you'll find all the
            Products intrsted to tred with your product.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* <!--Card 1--> */}

          {product &&
            product?.map((blog, id) => {
              return <AcceptCard key={id} blog={blog} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default Bookmarked;
