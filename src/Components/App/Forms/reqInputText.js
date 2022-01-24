import React from "react";
import styled from "styled-components";

const InputCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 10px 0;
  width: 100%;
`;
const Label = styled.p`
  text-align: left;
  font-size: 16px;
  margin: 0 0 5px 0;

`;
const InputBox = styled.input`
  color: #5B6270;
  font-size: 16px;

  box-sizing: border-box;
  height: 42px;
  margin: 0;
  padding: 0 0 0 15px;
  border: 1px solid #CECECE;
  border-radius: 5px;
  
  &:focus {
    border: 2px solid #9DD4E7;
    outline: 0;
  }
  &::placeholder {
    font-style: italic;
    color: #929292;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
  }
`;
const Asterisk = styled.span`
  color: red;
`;

const ReqInputText = ({
  type="text",
  label="Title: ",
  asterisk=(<Asterisk>*</Asterisk>),
  placeholder="enter your information...",
  required="",
  onChange,
  value
}) => {
  return <InputCont>
      {/* the asterisk is red, hence why separated from label text */}
      <Label>{label}: {asterisk}</Label>
      <InputBox 
        className="inputText" 
        type={type} 
        placeholder={placeholder} 
        required={required}
        value={value}
        onChange={onChange}
      />
    </InputCont>
  };
  
  export default ReqInputText;
  