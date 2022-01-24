import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import "./PopUp.css";
import Mood from "../App/mood";
import { useParams } from "react-router";
import styled from "styled-components";

const moods = [
  {
    id: 1,
    mood: "Good",
    Mood: () => {
      return <Mood mood={"good"} />
    },
    link: "/auth/pos-dialog" 
  },
  {
    id: 2,
    mood: "Neutral",
    Mood: () => {
      return <Mood mood={"neutral"} />
    },
    link: "/auth/pos-dialog" 
  },
  {
    id: 3,
    mood: "Stress",
    Mood: () => {
      return <Mood mood={"stress"} />
    },
    link: "/auth/neutral-dialog" 
  },
  {
    id: 4,
    mood: "Unhappy",
    Mood: () => {
      return <Mood mood={"unhappy"} />
    },
    link: "/auth/neg-dialog" 
  },
  {
    id: 5,
    mood: "Overwhelmed",
    Mood: () => {
      return <Mood mood={"overwhelmed"} />
    },
    link: "/auth/neg-dialog" 
    
  },
];

const StyledLink = styled(Link)`
  color: #5b6270;
  text-decoration: none;
`;
const MoodCont = styled.div`
`;
const Header = styled.h2`
  margin: 0 50px;
`;
const MoodComp = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: center;
  margin-top: 5em;

  @media (max-width: 825px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 50px;
  }
`;


export default function PopUpMood({setUserId}) {
  
  const MoodSelection = () => {
    const {id} = useParams()
    return (
      <MoodCont>
        <Header>How are you feeling today?</Header>
        <MoodComp>
          {moods.map((mood) => {
            const {Mood} = mood
            return (
                <StyledLink to={`${mood.link}`}><Mood /></StyledLink>
            );
          })}
        </MoodComp>
      </MoodCont>
    );
  };

  // const Mood = () => {
  //   let id = useParams();

  //   return (
  //     <div>
  //       <h1>Params</h1>
  //       <span className="Container">
  //         {moods
  //           .filter((mood) => {
  //             return id.mood === mood.mood;
  //           })
  //           .map((mood) => {
  //             return <mood.Mood />;
  //           })}
  //       </span>
  //     </div>
  //   );
  // };

  return (
      <MoodSelection />
  )
}