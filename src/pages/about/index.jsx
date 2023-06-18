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
            <h2>Hey, I&apos;m Wesley Moses.</h2>
            <hr />
          </div>
          <div className="about__content">
            <p>
              I&apos;m a full-stack developer from{" "}
              <img className="flag" src={Canada} alt="Canada" />, now living in{" "}
              <img className="flag" src={Finland} alt="Finland" />.
            </p>
            <p>
              I take pride in building simple, beautiful applications using
              modern web technologies.
            </p>
            <p>
              I&apos;m a Senior Software Engineer at{" "}
              <a
                href="https://www.nordea.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nordea
              </a>
              , the largest financial group in the Nordics. Previously, I
              developed{" "}
              <a
                className="external__link"
                href="https://www.happeo.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Happeo
              </a>
              , a social intranet for Google Workspace, and{" "}
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
