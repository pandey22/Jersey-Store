
import React, { useState,useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'

const RelatedProducts = ({category, subCategory}) => {
    const {products} = useContext(ShopContext);
    const [related, setRelated]= useState([]);

    useEffect(()=>{
        if(products.length > 0)
        {

        }
    },[products])
  return (
    <div>
      
    </div>
  )
}

export default RelatedProducts
