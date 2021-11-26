import React from "react";
import "./footer.scss";

const Footer = () => (
  <div id="footer">
    <section className="footer">
      <p>
        <span className="footer__bracket">[ </span>Made with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by{" "}
        <a
          href="http://github.com/wes337"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wesley Moses
        </a>{" "}
        &copy;2020<span className="footer__bracket"> ]</span>
      </p>
    </section>
  </div>
);

export default Footer;
