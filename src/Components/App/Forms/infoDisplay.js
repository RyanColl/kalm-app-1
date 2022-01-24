import React from "react";
import styled from "styled-components";

const InfoDisplayCont = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
// min-width: 400px;
// max-width: 100%;
margin: 10px 0;
width: 100%;

// @media (max-width: 500px) {
  // max-width: 90%;
//   min-width: 300px
// }
`;
const Label = styled.p`
  text-align: left;
  font-size: 16px;
  margin: 0 0 5px 0;
`;
const InputBox = styled.input`
  color: #5b6270;
  background-color: #FEFCF9;
  font-size: 16px;
  font-weight: bold;

  box-sizing: border-box;
  // width: 100%;
  height: 42px;
  margin: 0;
  padding: 0 0 0 15px;
  border: none;
  border-bottom: 1px solid #cecece;

  &:focus {
    border: none;
    outline: 0;
  }
  &:disabled {
    background-color: #FEFCF9;
  }
`;

const InfoDisplay = ({ 
  label= "label: ",
  labelDisplay= "flex",
  type= "text",
  value="",
  required= "",
  disabled="",
  readOnly="",
}) => {
  return (
    <InfoDisplayCont>
      <Label style={{display: {labelDisplay}}}>{label}</Label>
      <InputBox 
        type={type}
        value={value}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
      />
    </InfoDisplayCont>
  );
};

export default InfoDisplay;
