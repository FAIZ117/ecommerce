import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';

const Container=styled.div`
  height:60px;
`
const Wrapper=styled.div`
  padding:10px 20px;
  display:flex;
  justify-content:space-between;
  align-items:center;
`
const Left=styled.div`
  flex:1;
  display:flex;
  align-items:center
`
const Language= styled.span`
  font-size:14;
  cursor:pointer;
`
const SearchContainer=styled.div`
  border:0.5px solid lightgray;
  display:flex;
  align-items:center;
  margin-left:25px;
  padding:5px;
`
const Input=styled.input`
  border:none;
`


const Center=styled.div`
  flex:1;
  text-align:center;
`

const Logo=styled.h1`
  font-weight:bold;
`

const Right=styled.div`
  flex:1;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  bordere
`
const MenuItems=styled.div`
  font-size:14px;
  cursor:pointer;
  margin-left:25px

`

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input/>
            <SearchIcon style={{color:"gray",fontSize:"18px" }}/>
          </SearchContainer>
        </Left>
        <Center><Logo>Ecommerce.</Logo></Center>
        <Right>
          <MenuItems>Register</MenuItems>
          <MenuItems>Sign In</MenuItems>
          <MenuItems><Badge badgeContent={4} color="primary">
          <ShoppingCartOutlinedIcon/>
          </Badge></MenuItems>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar