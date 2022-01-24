

import React from 'react'
import Kalmlogo from "../../Assets/Logo/logo_kalm.svg";
import Greeting from '../App/Greeting/greeting';
import styled from "styled-components";
import { useEffect, useState } from 'react';
const FlexDiv = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  top: ${window.innerHeight/2 - 190}px;
  left: ${window.innerWidth/2 - 190}px;
`;
const timeout = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('animate')
        }, 1000)
    })
}
const WelcomeAnimation = () => {
    const [c, setC] = useState('')
    const [opacity, setOpacity] = useState(1)
    useEffect(() => {
        timeout().then(c => {
            setC(c)
            timeout().then(c => setOpacity(0))
        })
    }, [])
    return (
        <FlexDiv className="welcome-logo-animation">
            <h1 style={{opacity}} className={`welcome-animation ${c}`}>Welcome To</h1>
            <img style={{height: 'auto'}} className='kalm-logo-animation' src={Kalmlogo} />
            <span style={{opacity}} className={`greeting-animation ${c}`}><Greeting /></span>
        </FlexDiv>
    )
}
export default WelcomeAnimation;