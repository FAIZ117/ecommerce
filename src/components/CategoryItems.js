import React from 'react'
import styled from "styled-components"


const Container=styled.div`
  flex: 1;
  padding:50px;
  height:40vh;
  box-shadow: 1px 1px 5px black;
  position:relative;


`
const Image=styled.img`
  width:100%;
  height:100%;
  object-fit:contain;
`
const Info=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

`
const Title=styled.div`
  position:absolute;
  top:2%;
  background-color:#3a473d;
  color:white;
  padding: 2px 6px 2px 6px;
  box-shadow: 1px 1px 5px black;
  
`
const Button=styled.button`
position:absolute;
bottom:0.5%;
display: inline-block;
outline: none;
cursor: pointer;
font-size: 14px;
line-height: 1;
border-radius: 10px;
transition-property: background-color,border-color,color,box-shadow,filter;
transition-duration: .3s;
border: 1px solid transparent;
letter-spacing: 2px;
min-width: 160px;
text-transform: uppercase;
white-space: normal;
font-weight: 700;
text-align: center;
padding: 16px 14px 18px;
color: #3a473d;
box-shadow: inset 0 0 0 2px #3a473d;
background-color: #bbc4bd;
height: 48px;
&:hover{
    color: #fff;
    background-color: #616467;
}

`
 
function CategoryItems(props) {
  const {items}=props;
  return (
    <Container>
      <Image src={items.image}/>
      <Info>
        <Title>{(items.category).toUpperCase()}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  )
}

export default CategoryItems