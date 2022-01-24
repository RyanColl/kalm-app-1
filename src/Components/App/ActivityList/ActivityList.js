import React from "react";
import styled from "styled-components";
import BubbleWrap from "../../../Assets/Images/Activities/List/ActBubbleWrap.svg";
import BalloonPop from "../../../Assets/Images/Activities/List/ActBalloonPop.svg";
import Gratitude from "../../../Assets/Images/Activities/List/ActGratitude.svg";
import SelfWorth from "../../../Assets/Images/Activities/List/ActSelfworth.svg";
import Mindset from "../../../Assets/Images/Activities/List/ActMindset.svg";
import FocusBreathing from "../../../Assets/Images/Activities/List/ActBreathing.svg";
import MuscleRelaxation from "../../../Assets/Images/Activities/List/ActRelax.svg";
import GuidedImagery from "../../../Assets/Images/Activities/List/ActGuidedImagery.svg";


const StyledDiv = styled.div`
  width: 215px;
  margin: 24px 48px;

  @media (max-width: 1000px) {
    width: 175px;
    margin: 24px;
  }
  @media (max-width: 800px) {
    width: 130px;
    margin: 24px;
  }
  @media (max-width: 600px) {
    width: 130px;
    margin: 12px;
  }
`;


const Img = styled.img`
  width: 200px;

  @media (max-width: 1000px) {
    width: 175px;
  }
  @media (max-width: 800px) {
    width: 130px;
  }
`;
const StyledText = styled.p``;

const ActivityList = ({ activity }) => {
  const activities = {
    bubblewrap: { icon: BubbleWrap, text: "Bubble Wrap" },
    balloonpop: { icon: BalloonPop, text: "Balloon Pop" },
    gratitude: { icon: Gratitude, text: "Gratitude" },
    selfworth: { icon: SelfWorth, text: "Self Worth" },
    mindset: {icon: Mindset, text: "Mind Set"},
    focusbreathing: {icon:FocusBreathing, text: "Focus Breathing"},
    musclerelaxation: {icon:MuscleRelaxation, text: "Muscle Relaxation"},
    guidedimagery: {icon: GuidedImagery, text: "Guided Imagery"}
  };

  const Icon = activities[activity]["icon"];

  return (
    <StyledDiv>
      <Img src={Icon} alt="activity icon" />
      <StyledText>{activities[activity]["text"]}</StyledText>
    </StyledDiv>
  );
};

export default ActivityList;
