import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  border-radius: 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  margin: 10px 12px;

  color: #5B6270;
  background-color: ${(props) => (props.selected ? "#C3E5F0" : "#FEFCF9")};
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);

  cursor: pointer;
  user-select: none; 
  transition: 0.3s;
  &:hover {
    background-color: ${(props) => (props.selected ? "#9DD4E7" : "#E9E9E9")};
  }
`;

const GratitudeCheckbox = ({ text, isChecked, clickHandler }) => {
  return (
    <Container selected={isChecked} onClick={clickHandler}>
      {text}
    </Container>
  );
};

export default GratitudeCheckbox;
