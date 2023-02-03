"use client";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import ImageUploading from 'react-images-uploading';
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";

type Props = {};

const Add = (props: Props) => {


  const uploader = Uploader({
    apiKey: "free" // Get production API keys from Upload.io
  });
  
  // Configuration options: https://upload.io/uploader#customize
  const options = { multi: true };

  const [productname, setName] = useState("Vaibhav");
  const [description, setDescription] = useState("dumb kid");
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const range:any = [minValue, maxValue]; 
  const images:string[] = [];
  const [category, setCategory] = useState("");
  const [userId, setUserId] = useState("");
  const [price, setPrice] = useState<number>(10);
  const [data, setData] = useState({
    productname: productname,
    userIds: userId,
    ranges: range,
    imagess: images,
    descriptions: description,
    categorys: category,
    prices: price,
  });

  const a = useSession();
  // console.log(a);
  // useEffect(() => {
  //   const uploadRes = await axios.post(
  //           "https://api.cloudinary.com/v1_1/drfxcmd66/image/upload",
  //           data
  //         );
  // }, [])


  const handleSubmit = async (e: any) => {

   

    range[0] = minValue;
    range[1] = maxValue;
    // console.log(productname, userId, range, images, description, category, price);
    
    e.preventDefault();
    const emaill = a?.data?.user?.email;
    // console.log(emaill);
    const vaibhav = await axios.post("http://localhost:5000/users/findUserByEmail",{userEmail: emaill});
    console.log(vaibhav.data.data);
    // console.log(data);

    setData({
      productname: productname,
      userId: vaibhav.data.data,
      range: range,
      images: images,
      description: description,
      category: category,
      price: price,

    });
    
  


    const uploadRes = await axios.post("http://localhost:5000/users/addProduct", data)
    .then ((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })



  };


  return (
    <div>
      <h1 className="bg-[#25495c] text-center pt-8 text-5xl text-[#e2edf2]">
        ADD YOUR PRODUCT
      </h1>
      <div className="flex bg-[#25495c] justify-center items-center">
        <div className="mr-72">
          <img src="" />
        </div>
        <div
          className="bg-white rounded-lg p-6 my-10 add-form w-1/4 "
          onSubmit={handleSubmit}
        >
          <div className="pb-6 form-control">
            <label>
              <span className="block text-[#25495c]">Product Name</span>
              <input
                className="form-input"
                type="text"
                placeholder="Add the name of your product"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="form-control pb-6">
            <label>
              {" "}
              <span className="block text-[#25495c]">Product Description</span>
              <input
                className="form-input"
                type="text"
                placeholder="Describe your prodct and mention if any defects"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />{" "}
            </label>
          </div>

          <div className="form-control pb-6">
            <label>
              {" "}
              <span className="text-[#25495c]">Minimum Value</span>{" "}
            </label>
            <input
              placeholder="Minimum value of your product"
              className="form-input"
              type="text"
              onChange={(e) => {
                setMinValue(e.target.value);
              }}
            />
          </div>

          <div className="form-control pb-6">
            {" "}
            <label>
              {" "}
              <span className="block text-[#25495c]">Maximum Value</span>
              <input
                className="form-input block"
                type="text"
                placeholder="Maximum value of your product"
                onChange={(e) => {
                  setMaxValue(e.target.value);
                }}
              />{" "}
            </label>
          </div>

          <div className="form-control pb-6">
          <UploadButton uploader={uploader}
                options={options}
                onComplete={files => files.map(x => images.push(x.fileUrl)).join("\n")}>
    {({onClick}) =>
      <button onClick={onClick}>
        Upload a file...
      </button>
    }
  </UploadButton>
          </div>
          <div className="form-contol">
            <label htmlFor="category">
              {" "}
              <span className="block text-[#25495c]"> Select the Category</span>
              <select
                name="category"
                className="border-2"
                onChange={(e) => {
          setCategory(e.target.value);
                }}
              >
                <option value="Category">Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Clothes">Clothes</option>
                <option value="Study_material">Study Material</option>
                <option value="Household_Commodity">Household Commodity</option>
              </select>
            </label>

            <input
              type="submit"
              className="block mt-6 btn bg-[#25495c]"
              value="Submit"
              onClick={handleSubmit}
            />
          </div>

          {/* <label htmlFor="condition"> <span className='block text-[#25495c] '>In what condition the product is? </span>
          <select name="condition" >
          <option value="Excellent"  >Excellent</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
            <option value="Worst">Worst</option>
          </select>
        </label> */}

          {/* <input type="submit" value='Save Task'/> */}
        </div>
      </div>
    </div>
  );
};

export default Add;
