'use client';
import React from 'react'
import { useState } from 'react'
import Logo from '../add/Form.png'

type Props = {}

const Add = (props: Props) => {

  return (
    <div>
      <h1 className='bg-[#25495c] text-center pt-8 text-5xl text-[#e2edf2]'>ADD YOUR PRODUCT</h1>
      <div className='flex bg-[#25495c] justify-center items-center'>
        
      <div className='mr-72'>
       <img src="https://o.remove.bg/downloads/75d0d792-67fa-4044-9561-a8b6998eff2a/image-removebg-preview.png"   />
      </div>
    <form className='bg-white rounded-lg p-6 my-10 add-form w-1/4 '>
          <div className='pb-6 form-control'>
              <label><span className='block text-[#25495c]'>Product Name</span>
          <input className='form-input' type="text" placeholder='Add the name of your product' />
          </label>
          </div> 
          <div className='form-control pb-6'>
        <label> <span className='block text-[#25495c]'>Product Description</span>
              <input className='form-input' type="text" placeholder='Describe your prodct and mention if any defects' />  </label>
      </div> 
      
      <div className='form-control pb-6' >
        <label> <span className='text-[#25495c]'>Minimum Value</span> </label>
            <input placeholder='Minimum value of your product' className='form-input' type="text" /> 
        </div> 

        <div className='form-control pb-6'> <label> <span className='block text-[#25495c]'>Maximum Value</span>
              <input className='form-input block' type="text"  placeholder='Maximum value of your product' />  </label></div>
         
      

        <div className='form-control pb-6'>
        <label> <span className='block text-[#25495c]'>Upload the Image of the product</span>
          
              <input className='form-input' type="file" placeholder='Image' /></label>
        </div> 
    <div className='form-contol'>
        <label htmlFor="category"> <span className='block text-[#25495c]'> Select the Category</span>
          <select name="category" className='border-2' >
          <option value="Category"  >Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Clothes">Clothes</option>
            <option value="Study_material">Study Material</option>
            <option value="Household_Commodity">Household Commodity</option>

          </select>
          </label>

          <input type="submit" className='block mt-6 btn bg-[#25495c]'  value="Submit"  />
          
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
      </form>
      </div>
      </div>
  )
}

export default Add