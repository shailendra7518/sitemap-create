import { Link } from "@remix-run/react";
import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import type { HeaderList } from "~/constants/types";

const NavigationItem: React.FC<{ navData: HeaderList }> = ({ navData }) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(true);

  const handleNavItemClick = () => {
    setIsDropDownVisible(false);
    setTimeout(() => setIsDropDownVisible(true), 100);
  };

  return (
    <li className="nav-item dropdown" aria-expanded="false">
      <Link
        to={navData.link}
        className="btn navs shadow-none py-lg-4 mt-sm-4 mt-lg-0"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {navData.name}
      </Link>
      {!!navData.items?.length && (
        <div className="animated-line">
          {isDropDownVisible && (
            <ul
              className="dropdown-menu rounded-0 p-0 ms-md-5 ms-lg-0"
              aria-labelledby="navbarDropdown"
            >
              <div className="dropdown-sidebar">
                <p>Learn More About TechStaunch</p>
                {navData.items.length == 4 ? (
                  <a href="/career" className="join-team-link">
                    Join Our Team
                    <GoArrowRight className="right-arrow" />
                  </a>
                ) : (
                  <a href="/contact" className="join-team-link">
                    Contact Us
                    <span className="ms-1 header-arrow">
                      <GoArrowRight className="right-arrow" />
                    </span>
                  </a>
                )}
              </div>
              <div className="dropdown-menu-options">
                {navData.items.map((element, index) => {
                  return (
                    <li
                      className="nav-item w-100"
                      key={index}
                      id={`navbarDropdown-item-${index + 1}`}
                    >
                      <Link
                        className="dropdown-item px-3 py-3"
                        to={element.link}
                        onClick={handleNavItemClick}
                      >
                        <span className="me-3">
                          <img
                            src={element.icon}
                            alt={element.name + " Navigation Icon"}
                            loading="lazy"
                            width="25"
                          />
                          {/* {element.icon} */}
                        </span>
                        <span className="nav-text">{element.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </div>
            </ul>
          )}
        </div>
      )}
    </li>
  );
};

export default NavigationItem;
