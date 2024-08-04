import React from "react";
import type { TechnologyIcon as TechnologyIconProps } from "~/constants/types";

const TechnologyIcon: React.FC<{ icon: TechnologyIconProps; style?: any }> = ({
  icon,
  style,
}) => {
  return (
    <>
      <div
        className={`col d-flex justify-content-around technology-icon-anim ${style}`}
      >
        <div className="spinner mb-2 mb-lg-5">
          <div className="inner-spin level"></div>
          <span className="tech-icon">
            <img
              className="img-fluid"
              width="50"
              height="50"
              src={icon.icon}
              alt={icon.alternate}
              loading="lazy"
            />
          </span>
        </div>
      </div>
      <div className={`col d-flex justify-content-around ${style}`} />
    </>
  );
};

export default TechnologyIcon;
