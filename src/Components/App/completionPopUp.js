import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
// import { useQuery } from "react-query";
import "./PopUp.css";

const MainDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  // animation: gainOpacity 3.5s;
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(43, 43, 43, 0.5);
`;
const PopUpDiv = styled.div`
  max-width: 600px;
  max-height: 400px;
  box-sizing: border-box;
  padding: 80px;
  background-color: #fefcf9;
  border-radius: 10px;
  box-shadow: 0px 1px 6px 0px #00000040;
`;
const TextDiv = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 40px;
`;
const Header = styled.h3``;
const Text = styled.p`
  margin: 10px 0;
`;
const ButtonCont = styled.input`
`;

const CompletionPopUp = () => {
  const query = useQuery();
  const activityType = query.get("activityType");
  const backLinkRedirect =
    activityType === "all"
      ? "/auth/activities"
      : `/auth/activities/?activityType=${activityType}`;

  return (
    <MainDiv>
      <PopUpDiv>
        <TextDiv>
          <Header>You're done!</Header>
          <Text>
            Good job for completing an activity! Take a break from time to time
            and check in everyday :&#41;
          </Text>
        </TextDiv>
        <Link to={backLinkRedirect}>
          <ButtonCont type="button" className="button" value="Close" />
        </Link>
      </PopUpDiv>
      <Background style={{ zIndex: -1 }} />
    </MainDiv>
  );
};

export default CompletionPopUp;

export function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}