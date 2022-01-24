import { useEffect, useState, useRef } from "react";
import "./Testing.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

const features = [
  {
    id: 1,
    feature: "shake",
  },
  {
    id: 2,
    feature: "mic",
  },
  {
    id: 3,
    feature: "balloons",
  },
  {
    id: 4,
    feature: "vibrate",
  },
  {
    id: 5,
    feature: "bubblewrap",
  },
];
function Testing() {
  const [stream, setStream] = useState();
  const [errorWarning, setErrorWarning] = useState(false);
  const getMic = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => setStream(stream))
      .catch((err) => {
        setErrorWarning(true);
        setTimeout(() => {
          setErrorWarning(false);
        }, 5000);
      });
  };
  const [shakeMessage, setShakeMessage] = useState(
    "Click here to request Permissions!"
  );
  const [canShake, setCanShake] = useState(false);
  const onStart = () => {
    // Check if is IOS 13 when page loads.
  };
  function requestMotion() {
    if (
      typeof DeviceMotionEvent !== "undefined" &&
      typeof DeviceMotionEvent.requestPermission === "function"
    ) {
      alert(
        "The browser is going to request motion permissions from your phone"
      );
      DeviceMotionEvent.requestPermission()
        .then((response) => {
          alert(`response has been: ${response}`);
          if (response == "granted") {
            setCanShake(true);
            setShakeMessage("Shake the phone to see a result!");
            window.addEventListener("devicemotion", (e) => {
              // do something with e
              if (e.acceleration.x > 7.5) {
                alert("youre shaking the phone!!");
                setShakeMessage(
                  "You must be pepper and salt, cause you a shakin!!!"
                );
              }
            });
          }
        })
        .catch(console.error);
    } else {
      alert(
        "Device Motion is not compatible with your device or you have blocked permissions"
      );
    }
  }

  useEffect(() => {
    // getMic()
    window.onload = onStart;
  }, []);

  const MicApp = () => {
    return (
      <>
        {errorWarning && (
          <p style={{ backgroundColor: "rgba(233, 45, 176, 0.5)" }}>
            Please Allow Microphone Access - If you blocked Access, please
            refresh the page
          </p>
        )}
        <button
          onClick={getMic}
          style={{
            marginTop: 200,
            backgroundColor: "grey",
            width: 100,
            height: 30,
            borderRadius: 10,
          }}
        >
          Press for Mic
        </button>
        <div
          style={{
            marginTop: 150,
            backgroundColor: "blueviolet",
            width: 200,
            height: 50,
            borderRadius: 12,
          }}
        >
          {/* <audio src={stream} id="player" controls></audio> */}
        </div>
      </>
    );
  };

  const ShakeApp = () => {
    return (
      <>
        <button
          onClick={requestMotion}
          style={{
            marginTop: 200,
            backgroundColor: "grey",
            width: 300,
            height: 200,
            borderRadius: 10,
            color: "black",
            fontSize: 32,
          }}
          id="request"
        >
          {shakeMessage}
        </button>
      </>
    );
  };

  // balloon app
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
      animation: `float ${dur}s ease-in infinite`,
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

  const stateBalloons = createBalloons(100);
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

  const VibrateApp = () => {
    const [btnMsg, setBtnMsg] = useState("Press Me to Request Vibration");
    const vibrateClick = () => {
      navigator.vibrate(200);
    };
    return (
      <div id="vibrate-app">
        <button onClick={vibrateClick} className="vibrate-button">
          {btnMsg}
        </button>
      </div>
    );
  };

  return (
    <div id="testing" className="testing-header">
      <NavBar />
      <Switch>
        <Route path="/testing/shake">
          <ShakeApp />
        </Route>
        <Route path="/testing/mic">
          <MicApp />
        </Route>
        <Route path="/testing/balloons">
          <BalloonApp />
        </Route>
        <Route path="/testing/vibrate">
          <VibrateApp />
        </Route>
      </Switch>
    </div>
  );
}

export default Testing;

const navStyle = {
  textDecortation: "none",
  color: "black",
  fontSize: 32,
};

const NavBar = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 75,
        width: "100%",
        height: 150,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {features.map((f) => (
        <Link style={navStyle} to={`/testing/${f.feature}`}>
          {f.feature}
        </Link>
      ))}
    </div>
  );
};
