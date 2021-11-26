import React, { useRef } from "react";
import cvFile from "../../assets/cv.pdf";
import "./cv.scss";

function CV() {
  const cvRef = useRef();

  return (
    <div id="cv" ref={cvRef}>
      <section className="cv">
        <div className="cv__container">
          <div className="cv__container--content">
            <div className="cv__container--content-text">
              Want to know more?
            </div>
            <div className="cv__container--content-btn">
              <a href={cvFile} target="_blank" rel="noopener noreferrer">
                Check out my CV!
              </a>
            </div>
          </div>
          <div className="cv__container--shapes">
            <div className="cv__container--shapes-triangle"></div>
            <div className="cv__container--shapes-dots--container">
              <div className="cv__container--shapes-dots"></div>
            </div>
            <div className="cv__container--shapes-circle--container">
              <div className="cv__container--shapes-circle"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CV;
