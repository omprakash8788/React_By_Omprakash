import React, { useEffect, useState } from 'react'
import "../styles/productdata.css";

import axios from 'axios'
const FeatchDataWithAxios = () => {
    const [products, setProducts] = useState([])
    console.log(products);
    const getProducts= ()=>{
        axios.get('https://myfirstapi-data.vercel.app')
        .then((res)=>{
            // console.log(res.data.products)
            setProducts(res.data.products)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getProducts()
    },[])
  return (
    <>
    <div className="productcard">
  {products.map((item, index)=>{
      const {image, title, price,  description} = item
      return(
          <div key={index}>
          <img src={image} alt="Pr"/>
             <div className="card-title">{title}</div>
             <div className="card-price">${price}</div>
             <div className="card-description">{description}</div>
             <div className="btn-container">
             <button className="btn btn-primary">Add to Cart</button>
              <button className="btn btn-success">Buy Now</button>
             </div>
           <hr />
         </div>
      )
    })}
    </div>
  </>
  )
}

export default FeatchDataWithAxios