import React from "react";
import Popup from "reactjs-popup";
import { useState, useEffect } from "react";
import styled from "styled-components";
import CompletionPopUp from "../../Components/App/completionPopUp";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  max-width: 1000px;
`;
const StyledHeader = styled.h3`
  margin-bottom: 10px;
`;
const StyledText = styled.p`
  margin-bottom: 20px;
`;
const StyledSelection = styled.div`
  display: flex;
  flex-flow: column wrap;
`;
const CheckCont = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #5b6270;
  margin: 5px 0;
`;
const CustomCheckbox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background-color: #FFE999;
  margin-right: 5px;
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  display: none;
`;

const BtnCont = styled.div`
  margin-top: 40px;
`;

const StyledRouteButton = styled.button`
`;

const SelfWorth = () => {
  const [count, setCount] = useState(5);
  const [checkboxes, setCheckboxes] = useState([
    { text: "Kindness", value: false },
    { text: "Sensitivity", value: false },
    { text: "Reliability", value: false },
    { text: "Determination", value: false },
    { text: "Enthusiasm", value: false },
    { text: "Dedication", value: false },
    { text: "Honesty", value: false },
    { text: "Flexibility", value: false },
    { text: "Patience", value: false },
  ]);

  useEffect(() => {
    setCount(5 - checkboxes.filter((checkbox) => checkbox.value).length);
  }, [checkboxes]);

  const onChangeCheckbox = (text) => {
    const value = checkboxes.find((checkbox) => text === checkbox.text).value;
    setCheckboxes((checkboxes) => {
      return checkboxes.map((checkbox) => {
        if (checkbox.text === text) {
          checkbox.value = !value;
        }
        return checkbox;
      });
    });
  };

  return (
    <StyledDiv>
      <StyledHeader>Identify your strengths</StyledHeader>
      <StyledText>Pick at least 5 qualities you possess</StyledText>
      <StyledSelection>
        {checkboxes.map((checkbox) => (
          <CheckCont
            key={checkbox.text}
            onChange={() => onChangeCheckbox(checkbox.text)}
          >
            <CustomCheckbox isChecked={checkbox.value}> 
            {checkbox.value ? "✔" : " "}
            </CustomCheckbox>
            <Checkbox
              className="toggle"
              type="checkbox"
              value={checkbox.value}
            />
            {checkbox.text}
          </CheckCont>
        ))}
      </StyledSelection>
      <BtnCont>
        {count > 0 && count < 6 ? (
          <StyledText>Add {count} more strengths</StyledText>
        ) : (
          <Popup
            trigger={
              <StyledRouteButton type="button" className="button">Confirm</StyledRouteButton>
            }
            position="right center"
          >
            <CompletionPopUp />
          </Popup>
        )}
      </BtnCont>
    </StyledDiv>
  );
};

export default SelfWorth;
