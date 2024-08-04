import React from "react";
import type { ServiceCardType } from "~/constants/types";
import { useNavigate } from "@remix-run/react";
import { urlFor } from "~/root";
const ServiceCard: React.FC<{ service: ServiceCardType }> = ({ service }) => {
  const navigate = useNavigate();
  return (
    <div className="service-card mb-3 d-flex align-items-stretch h-100">
      <div className="card h-100 align-items-stretch">
        <div className="card-image">
          <img
            src={urlFor(service.serviceCardImage).url()}
            className="card-img-top p-4 h-100"
            alt={service.bannerTitle}
            width="284"
            height="262"
            loading="lazy"
          />
        </div>
        <div
          className="card-body text-center"
          onClick={() => navigate(`/services/${service.slug?.current}`)}
          role="button"
          tabIndex={-1}
        >
          <div className="card-title" role="heading" aria-level={2}>{service.bannerTitle}</div>
          <p className="card-text">{service.carddescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
