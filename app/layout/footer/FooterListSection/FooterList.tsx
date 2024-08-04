import React from "react";
import type { FooterList as FooterListProps } from "~/constants/types";
import FooterListItem from "./FooterListItem";

const FooterList: React.FC<{ footerlist: FooterListProps[] }> = ({ footerlist }) => {
  return (
    <>
      {footerlist.map((listItem, index) => {
        return index % 2 == 0 ? (
          <div
            className="col-xl-3 col-lg-3 col-md-4 d-none d-sm-block"
            key={index}
          >
            <div className="footer-widget ms-xl-5 ms-lg-4">
              <div className="footer-headings">{listItem.name}</div>
              <ul className="p-0">
                <FooterListItem listData={listItem.items} />
              </ul>
            </div>
          </div>
        ) : (
          <div
            className="col-xl-2 col-lg-2 col-md-3 d-none d-sm-block"
            key={index}
          >
            <div className="footer-widget">
              <div className="footer-headings">{listItem.name}</div>
              <ul className="p-0">
                <FooterListItem listData={listItem.items} />
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FooterList;
