import React, { useState } from "react";
import styled from "styled-components";
import Popup from 'reactjs-popup';

import Lottie from "react-lottie";
import plant from "../../Assets/Animations/plant.json";
import CompletionPopUp from "../../Components/App/completionPopUp";

const MainCont = styled.div`
  margin: 0 10px;
`;

const ProgressBarContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const ProgressBar = styled.div`
  background-color: ${({ active }) => (active ? "#BCF1CE" : "#ECECEC")};
  width: 100px;
  min-height: 20px;
  margin: 0 8px 12px 8px;
  border-radius: 10px;

  @media (max-width: 800px) {
    width: 80px;
  }

  @media (max-width: 600px) {
    width: 60px;
  }
`;
const StyledHeader = styled.h3``;

const StyledRouteButton = styled.button`
  margin-top: 24px;
  margin-bottom: 100px;
  max-width: 400px;
  min-height: 40px;
  border: none;
  border-radius: 5px;
  padding: 8px 24px;
  box-shadow: 0px 1px 4px 0px #00000026;

  

  background-color: #c3e5f0;
  color: #5b6270;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #9dd4e7;
  }
`;

const Mindset = () => {

  const [count, setCount] = useState(1);

  const LottieAnim = {
    loop: true,
    autoplay: true,
    animationData: plant,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <MainCont>
      <StyledHeader>Tap everytime you say an affimation.</StyledHeader>
      <ProgressBarContainer>
        <ProgressBar active={count >= 1} />
        <ProgressBar active={count >= 2} />
        <ProgressBar active={count >= 3} />
        <ProgressBar active={count >= 4} />
      </ProgressBarContainer>
      <Lottie
        options={LottieAnim}
        className="lottie"
        width={400}

      />
      {count <= 4 ? (
        <StyledRouteButton onClick={() => setCount(count + 1)}>
          {count === 1
            ? "Today is going to be a great day."
            : count === 2
            ? "I will be the best version of myself that I can be."
            : count === 3
            ? "I choose to be happy and love myself."
            : "I will not worry about the things I can't control."}
        </StyledRouteButton>
      ) : (
        <Popup trigger={<StyledRouteButton>Good Work!</StyledRouteButton>} position="right center">
          <CompletionPopUp />
        </Popup>
      )}
    </MainCont>
  );
};

export default Mindset;
