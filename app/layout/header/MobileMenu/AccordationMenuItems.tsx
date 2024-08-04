import React from "react";
import { Link } from "@remix-run/react";
import type { SubmenuItems } from "~/constants/types";

const AccordatiommenuItems: React.FC<{
  submenu: SubmenuItems[];
  onChecked: () => void;
}> = ({ submenu, onChecked }) => {
  return (
    <div>
      {submenu && submenu.map((submenuItem, index) => {
        return (
          <li
            className="navbar-nav nav-item w-100 "
            key={index}
            onClick={onChecked}
          >
            <Link className="dropdown-item px-3 py-3" to={submenuItem.link}>
              <span className="me-3">
                <img
                  className="nav-icon"
                  src={submenuItem.icon}
                  alt={submenuItem.name + "dropown-icon-image"}
                />
              </span>
              <span className="nav-text">{submenuItem.name}</span>
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default AccordatiommenuItems;
