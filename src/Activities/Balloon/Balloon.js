import React, {useState, useEffect} from 'react'
import './Balloon.css'
const Balloon = () => {
const getRandomStyles = () => {
    let r = random(255);
    let g = random(255);
    let b = random(255);
    let mt = random(200);
    let ml = random(50);
    let dur = random(5) + 10;
    return {
      backgroundColor: `rgba(${r},${g},${b},0.7)`,
      color: `rgba(${r},${g},${b},0.7)`,
      boxShadow: `inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7)`,
      margin: `${mt}px 0 0 ${ml}px`,
      animation: `float ${dur*6}s ease-in infinite`,
    };
  };
  const random = (num) => {
    return Math.floor(Math.random() * num);
  };
  const [, reload] = useState();
  const createBalloons = (num) => {
    let balloonArray = [];
    for (let i = num; i > 0; i--) {
      let balloon = {
        id: num - i + 1,
        class: "balloon",
        style: getRandomStyles(),
        click() {},
      };
      balloonArray.push(balloon);
    }

    return balloonArray;
  };

  const stateBalloons = createBalloons(1000);
  const BalloonApp = () => {
    const [balloons, setBalloons] = useState(stateBalloons);
    const balloonClick = (id) => {
      let loon = document.getElementById(`balloon${id}`);
      loon.style.opacity = 0;
      loon.style.backgroundColor = "rgba(0, 0, 0, 0)";
      loon.style.color = "rgba(0, 0, 0, 0)";
      loon.style.boxShadow = "rgba(202, 187, 0, 0) -7px -3px 10px inset";
      //insert style tag into head
      document.head.appendChild(
        document.createElement("style")
      ).innerHTML = `#balloon${id}:before {opacity: 0}`; // sets the inner html of the style tag to be something meaningful
        console.log('balloons length: ', balloons.length)
      // setBalloons(balloons.filter(balloon => {
      //   return balloon.id !== id
      // }))
    };
    return (
      <div id="balloon-container">
        {balloons.map((balloon, i) => {
          return (
            <div
              onClick={() => {
                balloonClick(i);
              }}
              key={i}
              id={`balloon${i}`}
              style={balloon.style}
              className={balloon.class}
            />
          );
        })}
      </div>
    );
  };
  return (<BalloonApp />)
}
  export default Balloon;