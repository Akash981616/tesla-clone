import React from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import Fade from "react-reveal"
const Section = ({
  title,
  touchless,
  bgimage,
  description,
  leftBtnText,
  rightBtnText,
}) => {
 
  return (
    
    <Wrap style={{backgroundImage: `url(${ bgimage})`}} >
  
    
    <Fade bottom>
      <ItemText>
      
        <h1>{title}</h1>
        <p>{description} <span>{touchless}</span></p>
      </ItemText>
      </Fade>
      <Button>
      <Fade bottom>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
        <DownArrow>
          <FaChevronDown />
        </DownArrow>
        </Fade>
      </Button>
    </Wrap>
  );
};

export default Section;
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;

  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
 

`;

const ItemText = styled.div`
font-size: 20px;
p{
  font-size:14px;
  opacity: 0.5;
}
span{
  text-decoration:underline;
}
margin-top:120px`;
const ButtonGroup = styled.div`
  display: flex;

  margin-bottom: 30px;
  @media (max-width: 728px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: black;
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  margin: 20px;
  font-size: 13px;
  cursor: pointer;
  @media (max-width: 728px) {
    margin: 10px;
  }
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.85;
  color: black;
`;
const DownArrow = styled.div`
  margin-top: 20px;
  height: 40px;

  font-size: 25px;
  color: white;
  animation: animateDown infinite 1.5s;
`;
const Button = styled.div``;
