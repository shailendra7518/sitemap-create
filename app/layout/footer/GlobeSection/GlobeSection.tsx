import React from "react";
import HalfWidthPicture from "./HalfWidthPicture";
import FooterAddress from "./FooterAddress";
const GlobeSection = () => {
  return (
    <div className="Location">
      <div className="container">
        <div className="row">
          <HalfWidthPicture src="/images/location-globe.svg" />
          <FooterAddress />
        </div>
      </div>
    </div>
  );
};

export default GlobeSection;
