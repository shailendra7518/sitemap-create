import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { headerMenu } from "~/constants";
import AccordationMenu from "./AccordationMenu";

const Menusidebar: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleButton = () => {
    setShow((show) => !show);
  };

  return (
    <>
      <button
        onClick={handleButton}
        className={
          `navbar-toggler ` +
          `${show ? "change" : ""}`
        }
        aria-label="bar"
      >
        <span className="bar1"></span>
        <span className="bar2"></span>
        <span className="bar3"></span>
      </button>
      <Offcanvas
        show={show}
        onHide={handleButton}
        className="offcanvas"
        placement="end"
      >
        <Offcanvas.Header>
          <Offcanvas.Title className="offcanvasheader"></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <AccordationMenu headerlist={headerMenu} onSelect={handleButton} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Menusidebar;

//  - - - CSS
