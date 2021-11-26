/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import Modal from "../../components/modal";
import modalData from "../../components/modal/modalData";
import Card from "../../components/card";
import "./projects.scss";

const Projects = () => {
  const [currentModal, setCurrentModal] = useState(undefined);

  const toggleModal = (modal) => {
    setCurrentModal(modal);
  };

  return (
    <div id="projects">
      <section className="projects">
        <div className="projects__cards-container">
          <div className="projects__cards">
            <div className="projects__cards--header">
              <h2>Projects</h2>
              <hr className="projects__cards--header--hr" />
            </div>
            <Card toggleModal={toggleModal} {...modalData.aStar} />
            <Card toggleModal={toggleModal} {...modalData.personalTraining} />
            <Card toggleModal={toggleModal} {...modalData.hwTracker} />
            <Card toggleModal={toggleModal} mobile {...modalData.bugTracking} />
            <Card
              toggleModal={toggleModal}
              mobile
              {...modalData.mobilePlaces}
            />
            <Card toggleModal={toggleModal} {...modalData.bookStore} />
          </div>
        </div>
      </section>
      <Modal modalName={currentModal} toggleModal={toggleModal} />
    </div>
  );
};

export default Projects;
