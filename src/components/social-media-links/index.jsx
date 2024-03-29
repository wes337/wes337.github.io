import React from "react";
import { useSprings, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./social-media-links.scss";

function SocialMediaLinks() {
  const icons = [
    <a key="github" href="http://github.com/wes337" target="blank">
      <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
    </a>,
    <a
      key="linkedin"
      href="https://www.linkedin.com/in/wesley-moses-7a6213149/"
      target="blank"
    >
      <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
    </a>,
    <a
      key="instagram"
      href="https://www.instagram.com/moseswes/"
      target="blank"
    >
      <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
    </a>,
    <a key="facebook" href="https://www.facebook.com/wesmoses" target="blank">
      <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
    </a>,
  ];

  const springs = useSprings(
    icons.length,
    icons.map((item, index) => ({
      opacity: 1,
      from: { opacity: 0 },
      delay: 3800 + index * 100,
    }))
  );

  return (
    <div className="social-media-links">
      {springs.map((props, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <animated.div style={props} key={`icons--${i}`}>
          {icons[i]}
        </animated.div>
      ))}
    </div>
  );
}

export default SocialMediaLinks;
