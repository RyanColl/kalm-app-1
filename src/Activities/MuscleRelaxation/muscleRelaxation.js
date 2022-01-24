import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import Popup from 'reactjs-popup';
import CompletionPopUp from "../../Components/App/completionPopUp";
import RelaxVid from "../../Assets/Videos/Muscle_relaxation_1000.mp4";

const VidCont = styled.div`
  margin-top: -30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 650px) {
    margin: 0;
  }
`;
const StyledRouteButton = styled.button`
  margin-top: 60px;
  margin-bottom: 60px;
`;
const Video = styled(ReactPlayer)``;

const MuscleRelaxation = () => {
  return <VidCont>
    <Video 
      url={RelaxVid} 
      playing 
      controls={true}
      width="100%" 
      height="100%"
    />
    <Popup trigger={<StyledRouteButton className="button">Completed</StyledRouteButton>} position="right center">
      <CompletionPopUp />
    </Popup>
  </VidCont>
};

export default MuscleRelaxation;