import React from "react";
import { Accordion } from "react-bootstrap";
import type { HeaderList } from "~/constants/types";
import AccordatiommenuItems from "./AccordationMenuItems";
import { Link } from "@remix-run/react";

const AccordationMenu: React.FC<{
  headerlist: HeaderList[];
  onSelect: () => void;
}> = ({ headerlist, onSelect }) => {
  return (
    <>
      <Accordion>
        {headerlist.map((menuItem, index) => {
          if (menuItem.items?.length) {
            return (
              <Accordion.Item
                key={index}
                eventKey={`accordion-item-${index}`}
                className="mobile-nav-menu"
              >
                <Accordion.Header>
                  <Link
                    to={menuItem.link}
                    className="mobile-menu-link"
                    onClick={onSelect}
                  >
                    {menuItem.name}
                  </Link>
                </Accordion.Header>
                <Accordion.Body className="mobile-nav-menu">
                  <AccordatiommenuItems
                    submenu={menuItem.items}
                    onChecked={onSelect}
                  />
                </Accordion.Body>
              </Accordion.Item>
            );
          } else {
            return (
              <h3 key={index} className="slidemenu-heading">
                <Link
                  to={menuItem.link}
                  className="mobile-menu-link"
                  onClick={onSelect}
                >
                  {menuItem.name}
                </Link>
              </h3>
            );
          }
        })}
      </Accordion>
    </>
  );
};

export default AccordationMenu;
