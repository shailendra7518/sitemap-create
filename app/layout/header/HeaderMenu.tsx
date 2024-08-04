import React from "react";
import NavLink from "~/components/NavLink";
import type { HeaderList } from "~/constants/types";
import HeaderIcon from "./HeaderIcon";
import Menusidebar from "./MobileMenu/MenuSidebar";
import NavigationItem from "./NavigationItem";

const HeaderMenu: React.FC<{ headerlist: HeaderList[] }> = ({ headerlist }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-list">
      <div className="header-logo pb-2">
        <NavLink href="/" aria-label="Techstaunch">
          <HeaderIcon />
        </NavLink>
      </div>
      <div className="header-list">
        <div
          className="collapse navbar-collapse pb-2 pb-lg-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav align-items-lg-baseline align-items-md-start align-items-xs-center ms-auto">
            {headerlist.map(
              (navItem, index) =>
                !navItem.isMobileOnly && (
                  <NavigationItem navData={navItem} key={index} />
                )
            )}
            <li className="nav-item ps-sm-3 py-sm-4 d-none d-lg-block ps-lg-0">
              <NavLink
                classes="main-btn shadow-none ms-lg-3 text-white"
                href="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <Menusidebar />
      </div>
    </nav>
  );
};

export default HeaderMenu;
