import React from "react";

const HalfWidthPicture: React.FC<{ src: string }> = ({ src }) => {
  return (
    <div className="col-lg-6 ">
      <div className="text-md-center text-lg-start">
        <img
          src={src}
          className="mw-100 h-auto"
          alt="World globe displaying locations of Surat and Dubai"
          width="627"
          height="627"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default HalfWidthPicture;
