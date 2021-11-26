import React, { useRef } from "react";
import PropTypes from "prop-types";
import Button from "../button";
import "./card.scss";

const defaultProps = {
  mobile: false,
};

function Card({ modalName, image, title, info, mobile, toggleModal }) {
  const buttonRef = useRef();

  const onMouseOver = () => {
    const buttonNode = buttonRef.current.children[0];
    buttonNode.classList.add("--hover");
  };

  const onMouseOut = () => {
    const buttonNode = buttonRef.current.children[0];
    buttonNode.classList.remove("--hover");
  };

  const handleKeyDown = (event) => {
    if (["Enter", "Space"].includes(event.code)) {
      toggleModal(modalName);
    }
  };

  return (
    <div
      className="card"
      onClick={() => toggleModal(modalName)}
      onKeyDown={handleKeyDown}
      onMouseOver={onMouseOver}
      onFocus={onMouseOver}
      onBlur={onMouseOut}
      onMouseOut={onMouseOut}
      role="button"
      tabIndex="0"
    >
      <div className="card__content">
        <p className="card__title">{title}</p>
        <div className="card__info">
          <p className="card__info-text">{info}</p>
          <div className="card__info-btn" ref={buttonRef}>
            <Button light />
          </div>
        </div>
      </div>
      <div className="card__image-container">
        <img
          src={image}
          className={`card__image ${mobile ? "--mobile" : ""}`}
          alt=""
        />
      </div>
    </div>
  );
}

Card.propTypes = {
  modalName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  mobile: PropTypes.bool,
  toggleModal: PropTypes.func.isRequired,
};
Card.defaultProps = defaultProps;

export default Card;
