import React from "react";

const LeaderCard: React.FC<{
  name: string;
  position: string;
  icon: string;
}> = ({ name, position, icon }) => {
  return (
    <>
      <div className="team-head-image">
        <img
          className="img-fluid"
          src={icon}
          alt={position}
          style={{ borderRadius: "5%" }}
        />
      </div>
      <h4 className="team-head-name text-center mt-4 mb-2">{name}</h4>
      <p className="team-head-position m-0 text-center">{position}</p>
    </>
  );
};

export default LeaderCard;
