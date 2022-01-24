import React from "react";
import styled from "styled-components";

const ButtonCont = styled.input`
  width: 190px;
  height: 40px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 1px 4px 0px #00000026;


  background-color: #C3E5F0;
  color: #5B6270;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #9DD4E7;
  }
`;

const Button=({
  type="button",
  text="button",
  style={},
  onClick=()=>{}

})=>{
  return <ButtonCont 
  type={type}
  style={style}
  value={text}
  onClick={onClick} />
}

export default Button;