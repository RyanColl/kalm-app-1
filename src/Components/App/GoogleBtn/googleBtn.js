import React from "react";
import styled from "styled-components";

// components and assets
import img from "../../../Assets/Images/google_btn.svg";

const ButtonCont = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
`;
const GoogleBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 210px;
  height: 40px;
  padding: 0;
  cursor: pointer;

  border: none;
  border-radius: 5px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  background-color: white;
  color: #5b6270;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  transition: 0.3s;

  &:hover {
    background-color: #eeeeee;
  }
`;
const GoogleIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 5px;
`;
const Text = styled.p`
  margin-right: 15px;
`;

const GoogleButton = ({ text = "Sign up with Google" }) => {
  return (
    <ButtonCont>
      <GoogleBtn>
        <GoogleIcon src={img} alt="Google Logo" />
        <Text>{text}</Text>
      </GoogleBtn>
    </ButtonCont>
  );
};
export default GoogleButton;
