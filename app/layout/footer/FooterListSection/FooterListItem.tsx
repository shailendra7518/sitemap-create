import React from "react";
import type { FooterListItem as FooterListItemProps } from "~/constants/types";
import { Link } from "@remix-run/react";

const FooterListItem: React.FC<{
  listData: FooterListItemProps[];
}> = ({ listData }) => {
  return (
    <>
      {listData.map((listItemData, index) => {
        return (
          <li className="list-group-item py-2" key={index}>
            <Link to={listItemData.link}>{listItemData.name}</Link>
          </li>
        );
      })}
    </>
  );
};

export default FooterListItem;
