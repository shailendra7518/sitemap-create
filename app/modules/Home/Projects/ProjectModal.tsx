import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import ProjectSlider from "./ProjectSlider";

const ProjectModal: React.FC<any> = ({ index, projects, ...props }) => {
  useEffect(() => {
    return () => {
      document.querySelector("html").style.overflow = null;
    };
  }, []);
  return (
    <Modal
      {...props}
      dialogClassName="my-modal"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      onEnter={() => (document.querySelector("html").style.overflow = "hidden")}
      onExit={() => (document.querySelector("html").style.overflow = null)}
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="d-lg-flex">
        <ProjectSlider id={index} projects={projects} />
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;
