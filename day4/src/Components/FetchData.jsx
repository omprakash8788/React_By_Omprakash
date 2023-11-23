import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [products, setProducts] = useState([])

    // console.log(products);
  
    const getProduct= async()=>{
  
      const res = await fetch('https://myfirstapi-data.vercel.app')
  
      const productData = await res.json();
      console.log(productData.products);
  
      setProducts(productData.products)
  
    }
  
    useEffect(()=>{
      getProduct()
    },[])
  return (
    <div>
       <div className='flex flex-wrap px-4 lg:px-10 '>
   {products.map((item,index)=>{
    const {title, price, image, description} = item
    return(    
      <div key={index} className="p-2 md:w-1/4 w-full">
      <div className="bg-[#F8EFBA] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
        <img className='rounded-lg w-full mb-2' src={image} alt="img" />
        <h2 className='text-xl text-black font-bold'>{title.substr(0,10)}</h2>
        <h2 className='text-lg text-black mb-2'>{price}</h2>

        <h2 className='text-lg text-black mb-2'>{description}</h2>
        <div className=" flex  space-x-2 justify-between">
          <button className='bg-[#706fd3] px-5 py-1.5 text-white rounded-lg'>
          Add to card
          </button>
          <button className='bg-[#ff4757] px-5 py-1.5 text-white rounded-lg'>
          Buy Now
          </button>
        </div>
      </div>
    </div>
    )
   })}
    
      </div>
   </div>
  )
}

export default FetchData