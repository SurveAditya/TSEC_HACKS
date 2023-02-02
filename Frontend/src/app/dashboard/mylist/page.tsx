"use client";
import React, { useEffect, useState } from "react";
import Cardss from "components/Cards/Cardss";
import Cards from "Components/Card";
import Card from "Components/Card";


type Props = {};

const MyBlogs = (props: Props) => {
  const [myblogs, setMyBlogs] = useState([]);
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  return (
    <section
      id="latest"
      className="bg-white dark:bg-gray-900 max-w-[1420px] mx-auto flex justify-between items-center p-4 mt-12"
    >
      <div className="py-8 md:px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h1 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            MY Listings
          </h1>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Welcome to our my blog section! Here you'll find all the blogs that
            you have posted.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* {myblogs &&
            Array.isArray(myblogs) &&
            myblogs.map((blog, id) => {
              return <DeleteCard key={id} blog={blog} fromOwnBlog={true} />;
            })} */}
            <Card/>
        </div>
      </div>
    </section>
  );
};

export default MyBlogs;
