import React from 'react'
import styled from "styled-components"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Container=styled.div`
    height:80vh;
    width:100%;
    display:flex;
    justify-content:space-between;
    background-color:coral;
    position:relative;
    overflow:hidden;

`
const Arrow=styled.div`
    width:50px;
    height:50px;
    background-color:gray;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    left:${props=>props.direction==="left"?"10px":""};
    right:${props=>props.direction==="right"?"10px":""};
    cursor:pointer;
    opacity:0.3;
    z-index:2;
    &:hover{
        opacity:0.8;
    }
`
const Wrapper=styled.div`
    display:flex;
    height:100%;
    transform:translatex(0vw);
`
const Slide=styled.div`
    display:flex;
    align-items:center;
    width:100%;
    height:100%;
    position:relative;

`
const ImgContainer=styled.div`
    flex:1;
    height:100%;

`
const Image=styled.img`
    height:100%;
    width:100vw;
    

`
const InfoContainer=styled.div`
    flex:1;
    position:absolute;
    right:30%;

    
`
const Title = styled.h1`
  font-size: 70px;
  color:#d8db74;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  color:#a6a85b;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  color:#d8db74;
`;





function Slider() {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowBackIosNewOutlinedIcon/>
        </Arrow>
        <Wrapper>
            <Slide>
            <ImgContainer>
                <Image src={require('./b.jpg')}/>
            </ImgContainer>
            <InfoContainer>
                <Title>This is title</Title>
                <Description> This is Description</Description>
                <Button>Submit</Button>    
            </InfoContainer>
            </Slide>
            <Slide>
            <ImgContainer>
                <Image src={require('./a.jpg')}/>
            </ImgContainer>
            <InfoContainer>
                <Title>This is title2</Title>
                <Description> This is Description2</Description>
                <Button>Submit</Button>    
            </InfoContainer>
            </Slide>
            <Slide>
            <ImgContainer>
                <Image src={require('./c.jpg')}/>
            </ImgContainer>
            <InfoContainer>
                <Title>This is title33</Title>
                <Description> This is Description3</Description>
                <Button>Submit</Button>    
            </InfoContainer>
            </Slide>   
        </Wrapper>
        <Arrow direction="right">
            <ArrowForwardIosOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider