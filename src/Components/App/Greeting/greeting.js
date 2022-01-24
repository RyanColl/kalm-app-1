import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

const GreetingCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 40px;
  border: none;
  border-radius: 5px;
`;

const QDiv = styled.text``;

const ADiv = styled.text``;

function Greeting({}) {
  const [quotePull, setQuote] = useState("Nothing Pulled");
  const [authorPull, setAuthor] = useState("Nobody Pulled");

  const GetQuote = async () => {
    //await means wait for this line to finish before moving on
    const result = await axios.get("https://api.quotable.io/random");
    console.log(result.data.content);
    setQuote(result.data.content);
    setAuthor(result.data.author);
  };

  useEffect(() => {
    GetQuote();
  }, []);

  return (
    <GreetingCont>
      <QDiv>{quotePull}</QDiv>
      <ADiv>{authorPull}</ADiv>
    </GreetingCont>
  );
}

export default Greeting;
