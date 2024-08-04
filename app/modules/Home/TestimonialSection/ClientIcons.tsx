import React from "react";
import { urlFor } from "~/root";

const ClientIcons: React.FC<{ clients: any }> = ({ clients }) => {
  return (
    <div className="container">
      <div className="client-icons">
        {clients?.images &&
          clients?.images.map((image: any, index: any) => (
            <img
              src={urlFor(image).url()}
              className="client-icon img-fluid"
              key={index}
              alt={`client-icon-${index + 1}`}
              width="250"
              height="100"
              loading="lazy"
            />
          ))}
      </div>
    </div>
  );
};

export default ClientIcons;
