import React from "react";
import { Services } from "../Home";

const ClutchServices: React.FC<Record<string, any>> = ({ services }) => {
  return (
    <div className="clutch-service-container">
      <Services services={services} />
    </div>
  );
};

export default ClutchServices;
