import React, { Component } from "react";
import Bubblewrap from "./Bubblewrap";
import styles from "./BubblewrapContainer.module.css";
import Button from "../../Components/App/button";
import styled from "styled-components";

const BubbleWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export default class BubblewrapContainer extends Component {
  state = {
    rows: []
  }
  
  makeWrap = () => {
    let rows = [];
    for (let i = 0; i < 96; i++) {
      rows.push(<Bubblewrap key={i} />);
    }
    this.setState({...this.state, rows})
  }
  componentDidMount() {
    this.makeWrap()
  }
  resetWrap = () => {
    this.setState({...this.state, rows: []})
    setTimeout(() => {
      this.makeWrap()
    }, 100)
  }
  render() {
    return (
      <BubbleWrapper>
        <div className={styles.container}>{this.state.rows}</div>
        <div><Button type="button" text="reset" onClick={this.resetWrap} /></div>
      </BubbleWrapper>
    );
  }
}

