import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact.scss";

function Contact() {
  useEffect(() => {
    VanillaTilt.init(
      document.querySelectorAll(".contact__body--parallax-item"),
      {
        max: 20,
        speed: 200,
      }
    );
  });
  return (
    <div id="contact">
      <section className="contact">
        <div className="contact__header">
          <h3>Let&apos;s get in touch!</h3>
          <hr />
          <p>
            I&apos;m always interested in new projects and opportunities.
            <br />
            Don&apos;t hesitate to give me a call or send an email, I&apos;ll
            get back to you as soon as I can!
          </p>
        </div>
        <div className="contact__body">
          <div className="contact__body--parallax-item">
            <div className="inner-parallax">
              <FontAwesomeIcon icon="phone" size="2x" />
              <p>+358 44 491 4200</p>
            </div>
          </div>
          <div className="contact__body--parallax-item">
            <div className="inner-parallax">
              <FontAwesomeIcon icon="envelope" size="2x" />
              <p>wesmoses@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
