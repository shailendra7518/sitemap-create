import React from "react";
import { urlFor } from "~/root";

const TeamSliderItem: React.FC<{ member: any }> = ({ member }) => {
  return (
    <div className="team-slider">
      <img
        className="img-fluid member-img"
        src={urlFor(member.image).url()}
        alt="team-member"
      />
      <div className="member-details">
        <h4 className="team-member-name text-center mt-5 mb-2">
          {member.name}
        </h4>
        <p className="team-member-position m-0 text-center">
          {member.position}
        </p>
        <p className="team-member-details m-0 text-center mt-3 ">
          {member.description}
        </p>
      </div>
    </div>
  );
};

export default TeamSliderItem;
