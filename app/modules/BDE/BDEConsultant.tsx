import React from "react";
import { InlineWidget } from "react-calendly";
import type { ConsultantData } from "~/constants/types";
import { urlFor } from "~/root";

const BDEConsultant: React.FC<{ consultant: ConsultantData }> = ({
  consultant,
}) => {
  return (
    <div className="consultant-container">
      <div className="container">
        <div className="consultant-container-inner">
          <div className="consultant-details">
            <div className="consultant-img">
              {consultant?.image && (
                <img
                  src={urlFor(consultant.image).url()}
                  width="163"
                  alt={consultant?.name}
                  height="163"
                  aria-label="Logo"
                  loading="lazy"
                ></img>
              )}
            </div>
            <div className="consultant-contacts">
              <div className="consultant-contact">
                <img src="/images/icons/user-icon.svg" alt="user icon" loading="lazy"/>
                <p>{consultant?.name}</p>
              </div>
              <div className="consultant-contact">
                <img src="/images/icons/mail-icon.svg" alt="mail icon" loading="lazy"/>
                <p>{consultant?.email}</p>
              </div>
              <div className="consultant-contact">
                <img src="/images/icons/call-icon.svg" alt="call icon" loading="lazy"/>
                <p>{consultant?.phone}</p>
              </div>
            </div>
            <p className="consultant-desc">{consultant?.description}</p>
          </div>
          <div className="consultant-calender">
            {consultant?.link && (
              <InlineWidget
                url={consultant.link}
                pageSettings={{
                  hideEventTypeDetails: true,
                  hideGdprBanner: true,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BDEConsultant;
