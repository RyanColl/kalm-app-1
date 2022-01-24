import React from "react";
import styled from "styled-components";
import Good from "../../Assets/Images/Mood/good.png";
import GoodHover from "../../Assets/Images/Mood/good_hover.png";
import Neutral from "../../Assets/Images/Mood/neutral.png";
import NeutralHover from "../../Assets/Images/Mood/neutral_hover.png";
import Stress from "../../Assets/Images/Mood/stress.png";
import StressHover from "../../Assets/Images/Mood/stress_hover.png";
import Unhappy from "../../Assets/Images/Mood/unhappy.png";
import UnhappyHover from "../../Assets/Images/Mood/unhappy_hover.png";
import Overwhelmed from "../../Assets/Images/Mood/overwhelmed.png";
import OverwhelmedHover from "../../Assets/Images/Mood/overwhelmed_hover.png";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 825px) {
    flex-direction: row;
    width: 300px;
    margin-left: 40px;
    justify-content: flex-start;
  }
  
  @media (max-width: 500px) {
    margin-left: 60px;
  }
`;

const IconWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height 150px;
    border-radius: 50%;
    
  @media (max-width: 825px) {
    width: 110px;
    height 110px;
  }
  @media (max-width: 500px) {
    width: 90px;
    height 90px;
  }

`;
const Img = styled.img`
    width: 125px;
    height: 125px;
    
    @media (max-width: 825px) {
      width: 100px;
      height: 100px;
      margin-right: 20px;
    }
    @media (max-width: 500px) {
      width: 80px;
      height: 80px;
      margin-right: 20px;
    }
`;

const Mood = ({ mood }) => {
  const [hovered, setHovered] = React.useState(false);

  const moods = {
    good: { default: Good, hover: GoodHover, text: "Good" },
    neutral: { default: Neutral, hover: NeutralHover, text: "Neutral" },
    stress: { default: Stress, hover: StressHover, text: "Stressed or Anxious" },
    unhappy: { default: Unhappy, hover: UnhappyHover, text: "Unhappy" },
    overwhelmed: { default: Overwhelmed, hover: OverwhelmedHover, text: "Overwhelmed" },
  };

  const Icon = moods[mood][hovered ? "hover" : "default"];

  return (
    <StyledDiv>
      <IconWrap
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        mood={mood}
      >
        <Img src={Icon} alt="mood icon" />
      </IconWrap>
      <div>{moods[mood]["text"]}</div>
    </StyledDiv>
  );
};

export default Mood;
