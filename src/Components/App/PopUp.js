import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import "./PopUp.css";
import Mood from "../App/mood";
import { useParams } from "react-router-dom";

const moods = [
  {
    id: 1,
    mood: "Good",
    Mood: () => {
      return <Mood mood={"good"} />
    }
  },
  {
    id: 2,
    mood: "Neutral",
    Mood: () => {
      return <Mood mood={"neutral"} />
    }
  },
  {
    id: 3,
    mood: "Stress",
    Mood: () => {
      return <Mood mood={"stress"} />
    }
  },
  {
    id: 4,
    mood: "Unhappy",
    Mood: () => {
      return <Mood mood={"unhappy"} />
    }
  },
  {
    id: 5,
    mood: "Overwhelmed",
    Mood: () => {
      return <Mood mood={"overwhelmed"} />
    }
    
  },
];

export default function PopUp(props) {
  let node = React.createRef();
  const listenerFunc = (e) => {
    props.handleClick(e, node);
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", listenerFunc, false);
    return () => document.removeEventListener("mousedown", listenerFunc);
  });

  const MoodSelection = () => {
    return (
      <div>
        <h2>How are you Feeling today? </h2>
        <div style={{flexDirection: 'row'}} className="mood-component">
          {moods.map((mood) => {
            const {Mood} = mood
            return (
              <>
                <Link to={`/${mood.mood}`}><Mood /></Link>
              </>
            );
          })}
        </div>
      </div>
    );
  };

  const Mood = () => {
    let id = useParams();

    return (
      <div>
        <h1>Params</h1>
        <span className="Container">
          {moods
            .filter((mood) => {
              return id.mood === mood.mood;
            })
            .map((mood) => {
              return <mood.Mood />;
            })}
        </span>
      </div>
    );
  };

  return (
    <div ref={node} className={`PopUp PopUp-enter`}>
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <MoodSelection />
          </Route>
          <Route path="/:mood">
            <Mood />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
