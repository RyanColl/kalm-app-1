import React from "react";
import ActivityList from "../Components/App/ActivityList/ActivityList";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useQuery } from "../Components/App/Navbar";
import Bubblewrap from "./Bubblewrap/BubblewrapContainer";
import BalloonPop from "./Balloon/Balloon";
import Candle from "./Bubblewrap/BubblewrapContainer";
import Gratitude from "./Gratitude/gratitude";
import SelfWorth from "./SelfWorth/selfworth";
import Mindset from "./Mindset/mindset";
import FocusBreathing from "./FocusBreathing/focusBreathing";
import MuscleRelaxation from "./MuscleRelaxation/muscleRelaxation";
import GuidedImagery from "./GuidedImagery/guidedimagery";

// steps to add an activity
// 1. import your activity at the top => <Activity />
// 2. create an object with format {name: 'activityname', Activity: <Activity />}
// 3. add the object to the activityList array, there are currently 2
// 4. make a link that points towards your activity: <Link to='/auth/activities/activityname'></Link>
export const activityList = [
  {
    name: "bubblewrap",
    activityType: "positive",
    component: Bubblewrap,
  },
  {
    name: "bubblewrap",
    activityType: "neutral",
    component: Bubblewrap,
  },
  {
    name: "balloonpop",
    activityType: "positive",
    component: BalloonPop,
  },
  {
    name: "balloonpop",
    activityType: "neutral",
    component: BalloonPop,
  },
  {
    name: "gratitude",
    activityType: "positive",
    component: Gratitude,
  },
  {
    name: "gratitude",
    activityType: "neutral",
    component: Gratitude,
  },
  {
    name: "selfworth",
    activityType: "positive",
    component: SelfWorth,
  },
  {
    name: "selfworth",
    activityType: "neutral",
    component: SelfWorth,
  },
  {
    name: "mindset",
    activityType: "positive",
    component: Mindset,
  },
  {
    name: "mindset",
    activityType: "neutral",
    component: Mindset,
  },
  {
    name: "focusbreathing",
    activityType: "neutral",
    component: FocusBreathing,
  },
  {
    name: "focusbreathing",
    activityType: "negative",
    component: FocusBreathing,
  },
  {
    name: "musclerelaxation",
    activityType: "neutral",
    component: MuscleRelaxation,
  },
  {
    name: "musclerelaxation",
    activityType: "negative",
    component: MuscleRelaxation,
  },
  {
    name: "guidedimagery",
    activityType: "neutral",
    component: GuidedImagery,
  },
  {
    name: "guidedimagery",
    activityType: "negative",
    component: GuidedImagery,
  },
];

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0 75px;
  max-width: 1250px;
`;
const ActivityCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 50px;
  @media (max-width: 600px) {
    margin: 0 12px;
  }
`;
const ActivityItem = styled(Link)`
  text-decoration: none;
  color: #5b6270;
`;

export default function Activities() {
  const query = useQuery();
  const activityType = query.get("activityType");

  const activities = activityList.filter(
    (activity) =>
      activityType === null || activityType === activity.activityType
  );

  return (
    <MainCont>
      <h2>Activities list</h2>
      <ActivityCont>
        {activities.map(({ name }) => (
          <ActivityItem
            to={
              "/auth/activities/" +
              name +
              `?activityType=${activityType || "all"}`
            }
          >
            <ActivityList activity={name} />
          </ActivityItem>
        ))}
      </ActivityCont>
    </MainCont>
  );
}
