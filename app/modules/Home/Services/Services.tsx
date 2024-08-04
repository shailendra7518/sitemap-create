import React from "react";
import ServiceSlider from "./ServiceSlider";

const Services: React.FC<any> = ({ services }) => {
  return (
    <section className="services-section h-100" id="services">
      <div className="services">
        <div className="container">
          <div className="heading text-end pb-md-5">
            <div className="d-flex justify-content-end align-items-center">
              <h2>
                <span className="fw-bold">Serv</span>ices
              </h2>
              <img
                src="images/icons/services-icon.svg"
                loading="lazy"
                alt="services-icon"
                width="105"
                height="99"
              />
            </div>
          </div>
          <div className="services-cards px-md-3 px-lg-0 py-md-4">
            <ServiceSlider services={services} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
