import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { popularProducts } from '../Data';
import { Products } from './Products';
import axios from "axios";



const Container=styled.div`
    display:flex;
    padding:20px;
    flex-wrap:wrap;
    justify-content:space-between;
` 
export const Product = ({cat,filters,sort}) => {
    const [products,setProducts]=useState([]);
    const [filteredProducts,setFilteredProducts]=useState([]);
    const url="http://localhost:5000/api/products?category=jackets"
    useEffect(() => {
      const getProducts=async()=>{
        try{
            const res=await axios.get(url)
            console.log(res);
        }catch(err){}
      };
        getProducts();
     
    }, [cat]);
    
    
    
    
  
  
    return (
        <Container>
            {popularProducts.map((item)=>(
                <Products item={item} key={item.id}/>
            ))}
        </Container>
    )
}