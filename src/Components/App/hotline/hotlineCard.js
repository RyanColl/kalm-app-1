import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;
  text-align: left;

  box-sizing: border-box;
  padding: 24px;
  margin: 12px;
  background-color: white;
  box-shadow: 0px 1px 6px 0px #00000040;
  border-radius: 10px;
  width: 30%;
  height: 164px;

  @media (max-width: 800px) {
    width: 100%;
    margin: 24px 0;
    height: 125px;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin: 24px 0;
    height: 164px;
  }
`;
const Text = styled.p`
  width: 100%;
`;
const ButtonCont = styled.div`
  padding: 8px 12px;
  width: 100%;
  border: none;
  border-radius: 5px;
  align-items: center;
  text-align: center;

  background-color: #fbd3cb;
  color: #5b6270;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #f7a797;
  }
`;
const PhoneNumber = styled.a`

text-decoration: none;
padding: 0;
color: #5b6270;
text-align: center;
&:hover {
    color: #5b6270;
}
`;

const HotlineCard = ({ text = "number", number = "788" }) => {
  return (
    <Card>
      <Text>{text}</Text>
      {/* <ButtonCont type="button" value={number} /> */}
      <ButtonCont>
      <PhoneNumber href={"tel:"+{number}} >{number}</PhoneNumber>
      </ButtonCont>
    </Card>
  );
};

export default HotlineCard;
