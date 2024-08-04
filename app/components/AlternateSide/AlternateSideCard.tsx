import React from "react";

export interface AlternateSide {
  title?: string;
  subtitle?: string;
  description: string;
  alt: string;
  image: string;
}
const AlternateSideCard: React.FC<{
  data: AlternateSide;
  className: string;
}> = ({ data, className }) => {
  return (
    <div
      className={`row align-items-center pt-5 pt-lg-0 my-2 my-lg-5 ${className}`}
    >
      <div className=" col-lg-6 col-md-12 text-center order-1 order-lg-2">
        <img className="img-fluid" src={data.image} alt={data.alt} />
      </div>
      <div className=" col-lg-6 col-md-12 banner-text pt-lg-5 mt-5 mt-lg-0 order-2 order-lg-1">
        {data.title && (
          <h2 className="services-heading">
            {data.title} <br /> {data.subtitle}
          </h2>
        )}
        <p className="banner-detail mb-4 ">{data.description}</p>
      </div>
    </div>
  );
};

export default AlternateSideCard;
