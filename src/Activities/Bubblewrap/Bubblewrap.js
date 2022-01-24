import React, { Component } from "react";
import styles from "./Bubblewrap.module.css";
// import song from "./sounds/Pop.wav";

// let audio = new Audio("./sounds/Pop.wav");

export default class Bubblewrap extends Component {
  state = {
    popped: false,
  };

  handleClick = (e) => {
    if (this.state.popped === false) {
      this.setState({
        popped: true,
      });
    }
  };

  //start = () => {
  //   audio.play();
  // };

  render() {
    if (this.state.popped === false) {
      return (
        <div
          className={styles.bubble}
          onClick={(e) => this.handleClick(e)}
        ></div>
      );
    } else {
      return (
        <div
          className={styles.bubble_popped}
          onClick={(e) => this.handleClick(e)}
        ></div>
      );
    }
  }
}
