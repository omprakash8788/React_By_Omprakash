import React, { useEffect, useState } from "react";



const FetchData2 = () => {
    const [products, setProducts] = useState([])
    console.log(products);

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

        <div className="container mt-5">
        {products.map((item, index)=>{
             const {title, price, image, description} = item
            return(
                <div key={index} className="card d-flex flex-column" style={{ width: '18rem' }}>
                <img src={image} className="card-img-top" alt="Sample" />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <span className="price">${price}</span>
                  <div>
                    <button className="btn btn-primary mr-2">Add to Cart</button>
                    <button className="btn btn-success">Buy</button>
                  </div>
                </div>
              </div>
            )
        })}
        </div>
      );
};

export default FetchData2;




