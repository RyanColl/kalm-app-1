import React from "react";
import styled from "styled-components";

const JustStyledButton = styled.div`
  color: #5b6270;
  text-decoration: none;
  margin: 8px 0 12px;

`;

const JustButton = ({
    text = "button",
    onClick,
}) => {
  return (
    <JustStyledButton onClick={onClick}>
      <input type="button" className="button" value={text} />
    </JustStyledButton>
  );
};

export default JustButton;
