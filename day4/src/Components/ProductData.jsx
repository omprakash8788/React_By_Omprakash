import React, { useEffect, useState } from "react";
import "../styles/productdata.css";


const ProductData = () => {
    const [products, setProducts] = useState([])
    console.log(products);

    const getProduct = async()=>{
        const res = await fetch("https://myfirstapi-data.vercel.app")

        const productData = await res.json();
        console.log(productData.products);
        setProducts(productData.products)
    }
    useEffect(()=>{
        getProduct()
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
  );
};

export default ProductData;
