import React from "react";
import Gratitude from "./Gratitude/gratitude";
import { useLocation } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Bubblewrap from "./Bubblewrap/Bubblewrap";

// steps to add an activity
// 1. import your activity at the top => <Activity />
// 2. create an object with format {name: 'activityname', Activity: <Activity />}
// 3. add the object to the activityList array, there are currently 2
// 4. make a link that points towards your activity: <Link to='/auth/activities/activityname'></Link>
const activityList = [
  {
    name: "bubblewrap",
    activityType: "happy",
  },
  {
    name: "balloonpop",
    activityType: "happy",
  },
  {
    name: "candle",
    activityType: "neutral",
  },
  {
    name: "gratitude",
    activityType: "neutral",
  },
  {
    name: "selfworth",
    activityType: "neutral",
  },
  {
    name: "mindset",
    activityType: "neutral",
  },
  {
    name: "focusbreathing",
    activityType: "neutral",
  },
  {
    name: "musclerelaxation",
    activityType: "neutral",
  },
  {
    name: "guidedimagery",
    activityType: "neutral",
  }
  // {
  //   name: "gratitude",
  //   activityType: "happy",
  // },
  // {
  //   name: "gratitude",
  //   activityType: "negative",
  // },
];

export default function IndividualActivity() {
  let node = React.createRef();
  const query = useQuery();
  const activityType = query.get("activityType");

  const activities = activityList.filter(
    (activity) =>
      activityType === null || activityType === activity.activityType
  );

  return (
    <div ref={node}>
    <Router>
      <Switch>
        <Route path={"/auth/activities/activity/gratitude"}>
            <Gratitude />
        </Route>
        <Route path={"/auth/activities/activity/bubblewrap"}>
            <Bubblewrap />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}
// from react-router-dom documentation
function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
