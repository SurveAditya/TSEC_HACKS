"use client"
import { useRouter } from "next/navigation";
import React from 'react'

type Props = {}

const DeleteCards = (props: Props) => {

    const router = useRouter();
  
    const product = props.blog;
    // console.log(product);
  
    const handleClick = (e: any, id: number) => {
      e.preventDefault();
      router.push(`/product/${product?.pid}`);
    };
  return (
    <div
      className="card-zoom w-full lg:max-w-full lg:flex dark:bg-gray-800 dark:border-gray-700"
      onClick={(e) => handleClick(e, product.title)}
    >
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url(${product?.img})` }}
        title="Mountain"
      ></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-700">
        <div className="mb-8">
          {product?.isMemberOnly && (
            <p className="text-sm text-gray-600 flex items-center dark:text-slate-400">
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p>
          )}
          <div className="text-gray-900 font-bold text-xl mb-2 dark:text-white">
            {product?.title}
          </div>
          <p className="text-gray-700 text-base dark:text-slate-300">
            {product?.desc}
          </p>
        </div>
        <p>Range : {product?.rangeStart === undefined ? '0' : product?.rangeStart} - {product?.rangeEnd === undefined ? '0' : product?.rangeEnd} ₹</p>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={"https://api.multiavatar.com/" + product?.autherName+".svg"}
            alt="Avatar of Writer"
          />
          <div className="flex justify-between ">
            <div className=" text-sm">
              <p className="text-gray-900 leading-none dark:text-white">
                {product?.autherName}
              </p>
              <p className="text-gray-600 dark:text-slate-300">
                {product?.dateOfPost}
              </p>
            </div>
            <div className="pl-10 flex flex-row space-x-2"><button className="bg-green-600 p-2 rounded-lg hover:bg-green-900">Accept</button> <button className="bg-red-600 p-2 rounded-lg hover:bg-red-900">Reject</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteCards