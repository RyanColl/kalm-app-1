import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';
import CompletionPopUp from "../../Components/App/completionPopUp";
import Sound from "../../Assets/Music/guided_meditation.mp3";
import headphones from "../../Assets/Images/headphones.svg";

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
`;
const StyledRouteButton = styled.button`
  margin-top: 60px;
`;
const Img = styled.img`
  margin-top: 50px;
  margin-bottom: 24px;
  width: 200px;
  @media (max-width: 600px) {
    width: 150px;
  }
`;

const AudioCont = styled.div`
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 24px;
`;
const SoundPlayer = styled(ReactPlayer)``;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #5B6270;
  font-style: normal;
  font-size: 13px;
`;

const Caption = styled.p`
  font-style: italic;
  font-size: 13px;
`;

const GuidedImagery = () => {
  return <MainCont>
      <Img src={headphones} />
      <p>Use headphones for better experience.</p>
      <AudioCont>
    <SoundPlayer 
      url={Sound} 
      playing 
      controls={true}
      width="100%" 
      height="100px"
    />
    <Caption>"<StyledLink to="https://www.youtube.com/watch?v=a4oXYtuc4bo&ab_channel=relaxforawhile">10 min Relaxation Guided Meditation/End of Day Relaxation or For Quick Stress Relief/Water Sounds</StyledLink>" by <StyledLink to="https://www.youtube.com/channel/UCOWpx-i3DaGwf4WHIT5trWQ">relax for a while</StyledLink></Caption>
    </AudioCont>
    <Popup trigger={<StyledRouteButton className="button">Completed</StyledRouteButton>} position="right center">
      <CompletionPopUp />
    </Popup>
  </MainCont>
};

export default GuidedImagery;
