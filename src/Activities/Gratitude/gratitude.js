import React, { useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import styled from "styled-components";
import GratitudeCheckbox from "./gratitude-checkbox";
import CompletionPopUp from "../../Components/App/completionPopUp";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  max-width: 1000px;
`;
const TextDiv = styled.div`
  width: 100%;
`;
const StyledHeader = styled.h3`
  margin-bottom: 10px;
`;
const StyledText = styled.p``;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: -12px;
`;

const StyledRouteButton = styled.button`
  margin-top: 60px;
`;

const Gratitude = () => {
  const [selectionCount, setSelectionCount] = useState(0);
  const [selection, setSelection] = useState([
    {
      text: "home",
      selected: false,
    },
    {
      text: "family",
      selected: false,
    },
    {
      text: "friends",
      selected: false,
    },
    {
      text: "my pet",
      selected: false,
    },
    {
      text: "my job",
      selected: false,
    },
    {
      text: "good sleep",
      selected: false,
    },
    {
      text: "good food",
      selected: false,
    },
    {
      text: "good heath",
      selected: false,
    },
  ]);

  const checkItem = (itemText) => {
    setSelection((selection) => {
      return selection.map((item) => {
        if (item.text === itemText) {
          item.selected = selectionCount >= 3 ? false : !item.selected;
        }
        return item;
      });
    });
  };

  useEffect(() => {
    const values = selection.map((item) => item.selected);
    const selectedCount = values.reduce((prev, next) => prev + next);
    setSelectionCount(selectedCount);
  }, [selection]);

  return (
    <StyledDiv>
      <TextDiv>
        <StyledHeader>What are you grateful for?</StyledHeader>
        <StyledText>
          Pick 3 things in your life you feel thankful for.
        </StyledText>
      </TextDiv>
      <StyledButtonContainer>
        {selection.map((item) => (
          <GratitudeCheckbox
            key={item.text}
            text={item.text}
            isChecked={item.selected}
            clickHandler={() => checkItem(item.text)}
          />
        ))}
      </StyledButtonContainer>
      {selectionCount >= 3 ? (
      <Popup trigger={<StyledRouteButton className="button">Confirm</StyledRouteButton>} position="right center">
        <CompletionPopUp />
      </Popup>
      ) : null}
    </StyledDiv>
  );
};

export default Gratitude;
