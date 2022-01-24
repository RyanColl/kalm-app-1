import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonLink = styled(Link)`
  color: #5b6270;
  text-decoration: none;
  margin: 8px 0 12px;

`;

const StyledLink = ({
    destination = "/", 
    text = "button",
}) => {
  return (
    <ButtonLink to={destination}>
      <input type="button" className="button" value={text} />
    </ButtonLink>
  );
};

export default StyledLink;
