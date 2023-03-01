import React, { useEffect, useState, useRef } from "react";
import { useTransition, animated } from "react-spring";
import "./subtitles.scss";

const Subtitles = () => {
  const animationInterval = useRef();
  const [index, setIndex] = useState(0);

  const colorYellow = "#EAB331";
  const colorWhite = "#F6F7F8";
  const colorBlue = "#081EFC";

  const customStyles = {
    color: colorYellow,
    position: "absolute",
    width: "125%",
  };

  const coverPages = [
    ({ style }) => (
      <animated.h2 style={{ ...style, ...customStyles }}>
        Software Developer
      </animated.h2>
    ),
    ({ style }) => (
      <animated.h2 style={{ ...style, ...customStyles }}>
        React Developer
      </animated.h2>
    ),
    ({ style }) => (
      <animated.h2 style={{ ...style, ...customStyles }}>
        Full-Stack Developer
      </animated.h2>
    ),
    ({ style }) => (
      <animated.h2 style={{ ...style, ...customStyles }}>
        Programmer
      </animated.h2>
    ),
    ({ style }) => (
      <animated.h2 style={{ ...style, ...customStyles }}>
        Front-End Developer
      </animated.h2>
    ),
    ({ style }) => (
      <animated.h2 style={{ ...style, ...customStyles }}>
        Back-End Developer
      </animated.h2>
    ),
    ({ style }) => (
      <animated.h2 style={{ ...style, ...customStyles }}>Nerd</animated.h2>
    ),
  ];

  const pages = [
    ({ style }) => (
      <animated.h2 style={{ ...style, position: "absolute" }}>
        Software Developer
      </animated.h2>
    ),
    ({ style }) => (
      <animated.h2 style={{ ...style, position: "absolute" }}>
        React Developer
      </animated.h2>
    ),
    ({ style }) => (
      <animated.h2 style={{ ...style, position: "absolute" }}>
        Full-Stack Developer
      </animated.h2>
    ),
    ({ style }) => (
      <animated.h2 style={{ ...style, position: "absolute" }}>
        Programmer
      </animated.h2>
    ),
    ({ style }) => (
      <animated.h2 style={{ ...style, position: "absolute" }}>
        Front-End Developer
      </animated.h2>
    ),
    ({ style }) => (
      <animated.h2 style={{ ...style, position: "absolute" }}>
        Back-End Developer
      </animated.h2>
    ),
    ({ style }) => (
      <animated.h2 style={{ ...style, position: "absolute" }}>Nerd</animated.h2>
    ),
  ];

  useEffect(() => {
    let mounted = true;

    animationInterval.current = setInterval(() => {
      if (!mounted) {
        return;
      }
      setIndex((state) => (state + 1) % 7);
    }, 5000);

    return () => {
      mounted = false;
      clearInterval(animationInterval.current);
    };
  }, []);

  const coverTransitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: "translate3d(0%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(100%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-100%,0,0)" },
  });

  const transitions = useTransition(index, (p) => p, {
    from: {
      opacity: 0,
      transform: "translate3d(100%,0,0)",
      textAlign: "center",
      width: "100%",
      color: colorWhite,
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0%,0,0)",
      textAlign: "center",
      width: "100%",
      color: colorWhite,
    },
    leave: {
      opacity: 0,
      transform: "translate3d(-50%,0,0)",
      textAlign: "center",
      width: "100%",
      color: colorBlue,
    },
  });

  return (
    <div className="subtitles">
      <div className="subtitles__text">
        {transitions.map(({ item, props, key }) => {
          const Page = pages[item];
          return <Page key={key} style={props} />;
        })}
      </div>
      <div className="subtitles__text--cover">
        {coverTransitions.map(({ item, props, key }) => {
          const Page = coverPages[item];
          return <Page key={key} style={props} />;
        })}
      </div>
    </div>
  );
};

export default Subtitles;
