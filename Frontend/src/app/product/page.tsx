"use client"
import Prodcard from 'Components/Prodcard'
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import axios from 'axios'

type Props = {}

const Products = (props: Props) => {
  const[products, setProducts] = React.useState([])
  const { data } = useSession();
  
  
  const handleSubmit = async (e: any) => {
    
    // const email = data?.user?.email;
    // // console.log(emaill);
    // const vaibhav = await axios.post("http://localhost:5000/users/findUserByEmail",{userEmail: email});
    // // console.log(vaibhav.data.data);
    // console.log("vaibhav" ,vaibhav);
    // const dataa = await  axios.post("http://localhost:5000/users/getProductsById",{
     
    //     userId: vaibhav.data.data,
        
    //     });
    // console.log("vaibhaasdfv" ,dataa.data.data);
    // setProducts(dataa.data.data);

    const dataa = await axios.get("http://localhost:5000/users/recentpost");
    // console.log(dataa.data.data);
    setProducts(dataa.data.data);
  };
  
  useEffect(() => {
    handleSubmit;
  }, []);
  


  return (
    <div>
      <button onClick={handleSubmit}>Click here to get data</button>
         <input className="items-center ml-132 w-96 h-12 mt-32 mb-10 flex border-2 border-black rounded-lg flex-wrap  " type="text" placeholder= "Search.." />
        <div className="flex flex-row">
            <label className="ml-132 mt-2">Min</label>
        <input className="items-center ml-6 w-16 h-10 mb-10 flex border-2 border-black rounded-lg   " type="text" placeholder= "Min" />
        <label className="ml-12 mt-2">Max</label>

        <input className="items-center ml-6 w-16 h-10 mb-10 flex border-2 border-black rounded-lg   " type="text" placeholder= "Max" />
        </div>

        <div className="flex flex-row flex-wrap">
          {
            products.map((product) => {
              return (
                <Prodcard key={product._id} product={product} />
              )
            })
            
          }
        
        </div>
    </div>
  )
}

export default Products