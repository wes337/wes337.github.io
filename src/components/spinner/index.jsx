import React from "react";
import { useSpring, animated } from "react-spring";

import "./spinner.scss";

function Spinner() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props}>
      <div className="spinner">
        <div className="spinner__cube" />
        <div className="spinner__cube" />
        <div className="spinner__cube" />
        <div className="spinner__cube" />
        <div className="spinner__cube" />
        <div className="spinner__cube" />
      </div>
    </animated.div>
  );
}

export default Spinner;
