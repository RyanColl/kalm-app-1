import React from "react";
import { useParams } from "react-router-dom";
import { activityList } from "./Activities";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Activity = () => {
  const { id } = useParams();

  const Component = activityList.find(
    (activity) => activity.name === id
  ).component;

  return <Container>{<Component />}</Container>;
};

export default Activity;
