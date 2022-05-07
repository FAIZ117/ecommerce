import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CategoryItems from "./CategoryItems";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex: 1;
`;

function Categories() {
  const [productCategory, setProductCategory] = useState([]);
  const [productList, setProductList] = useState([]);

async function fetchFunc(url){
  let data= await fetch(url)
  let parsedData = await data.json()
  return parsedData
}

async function  getProductCategory(){
  let data = await fetchFunc("https://fakestoreapi.com/products/categories")
  setProductCategory(data)
};

async function getProductList(){
  let arrPromises = productCategory.map(async (element)=>{
    let data = await fetchFunc(`https://fakestoreapi.com/products/category/${element}/?limit=1`)
    return (data[0])
  })
  let arr = await Promise.all(arrPromises)
  setProductList(arr)
  
}

useEffect(() => {
  getProductCategory();
}, []);
 
useEffect(() => {
  getProductList();
}, [productCategory]);

 /* async function  getProductCategory(){
    fetch("https://fakestoreapi.com/products/categories")
      .then((data) => data.json())
      .then((parsedData) => setProductCategory(parsedData));
  };

  async function getProductList() {
    let arr=[]
    productCategory.forEach((element) => {
      fetch(`https://fakestoreapi.com/products/category/${element}/?limit=1`)
        .then((data) => data.json())
        .then((parsedData) => {
            arr.push(parsedData[0])
            setProductList([...arr])
        }); 
    });
  }*/

  return (
    <Container>
        {productList.map((item)=>{
            return <CategoryItems key={item.id} items={item}/>
            })}
    </Container>
  );
}

export default Categories;
