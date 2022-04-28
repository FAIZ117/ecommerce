import React,{useState,useEffect} from 'react'
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
    transition: all 1.5s ease;
    transform:translatex(${props=>props.slideIndex*-100}vw);
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
    left:35%;

    
`
const Title = styled.h1`
  font-size: 70px;
  color:black;
  padding:0;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  color:black;
  padding:0;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  color:black;
  padding:0;
`;


function Slider() {
    const [sliderIndex,setSliderIndex]=useState(0)
    const[sliderData,setSliderData]=useState([])
    const[loading,setLoading]=useState(false)
    async function getItemList(){
        setLoading(false) 
        fetch('https://fakestoreapi.com/products?limit=6')
            .then(res=>res.json())
            .then(json=>setSliderData(json))
        setLoading(true)
    };
    useEffect(()=>{
        getItemList()
    },[]);

    function handleArrowClick(direction){
        let maxResult=sliderData.length;
        if(direction==="left"){
            setSliderIndex(sliderIndex>0?sliderIndex-1:maxResult-1)
            }else{
            setSliderIndex(sliderIndex<maxResult-1?sliderIndex+1:0) 
            }
    };


  return (
    <Container>
        
        <Arrow direction="left" onClick={()=>handleArrowClick("left")}>
            <ArrowBackIosNewOutlinedIcon/>
        </Arrow>
        <Wrapper slideIndex={sliderIndex}>
            {sliderData.map((element)=>{
                return <>
                    <Slide>
                        <ImgContainer>
                            <Image src={element.image} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{(element.title).slice(0,10)}</Title>
                            <Description>{element.description.slice(0,70)}</Description>
                            <Button>Submit</Button>
                        </InfoContainer>
                    </Slide> 
                </>
            })}  
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleArrowClick("right")}>
            <ArrowForwardIosOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider