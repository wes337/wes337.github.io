import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import Canada from "../../assets/images/flags/ca.png";
import Finland from "../../assets/images/flags/fi.png";
import portraitWesley from "../../assets/images/wesley.jpg";
import "./about.scss";

function About() {
  const aboutImageRef = useRef();

  useEffect(() => {
    VanillaTilt.init(aboutImageRef.current, {
      max: 20,
      speed: 200,
    });
  });

  return (
    <div id="about">
      <section className="about">
        <div className="about__content--container">
          <div className="about__header">
            <h2>Hey, I'm Wesley Moses.</h2>
            <hr />
          </div>
          <div className="about__content">
            <p>
              I'm a full-stack developer from{" "}
              <img className="flag" src={Canada} alt="Canada" />.
            </p>
            <p>
              I take pride in building simple, beautiful applications using
              modern web technologies.
            </p>
            <p>
              When I'm not coding, you can find me{" "}
              <a
                href="https://brethrenmetal.bandcamp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                making music
              </a>
              .
            </p>
            <p>
              Currently, I'm a Software Developer for{" "}
              <a
                className="external__link"
                href="https://www.happeo.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Happeo
              </a>{" "}
              in <img className="flag" src={Finland} alt="Finland" /> developing
              social intranet for Google Suite using React, Redux, Node.js.
              Previously, I helped develop{" "}
              <a
                className="external__link"
                href="https://www.recright.com/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                RecRight
              </a>
              , video recruitment SaaS.
            </p>
          </div>
        </div>
        <div className="about__image--container" ref={aboutImageRef}>
          <img
            className="about__image"
            src={portraitWesley}
            alt="Portrait of Wesley Moses"
          />
        </div>
        <div className="about__image--background" />
      </section>
    </div>
  );
}

export default About;
