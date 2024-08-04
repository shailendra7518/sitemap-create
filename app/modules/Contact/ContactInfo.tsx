import React from "react";
import NavLink from "../../components/NavLink";
import { contactInfo } from "~/constants/contactInfo";

const ContactInfo = () => {
  return (
    <section className="contact-detail-sec my-5 px-4">
      <div className="contact-detail-content">
        {contactInfo.map((contactway, index) => {
          return (
            <div
              className="content-card my-lg-0 my-3"
              key={`contact-info-${index}`}
            >
              <div className="container">
                <div
                  className={
                    index % 2 === 0
                      ? "row contact-details justify-content-md-start"
                      : "row contact-details justify-content-md-end"
                  }
                >
                  <div className="col-lg-5 col-md-8  contact-detail-box text-center position-relative">
                    <div className="contact-detail-widget"></div>
                    <NavLink
                      classes="contact-widget-link text-decoration-none position-absolute w-100 pt-2"
                      href={contactway.link}
                      {...contactway?.anchoprops}
                    >
                      <img
                        src={contactway.icon}
                        className="me-3"
                        alt={contactway.alternate}
                        loading="lazy"
                      />
                      {contactway.title}
                    </NavLink>

                    <img
                      src="/images/icons/arrow-right-fill.svg"
                      className="arrow-right-fill me-2 position-absolute"
                      alt="right arrow"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ContactInfo;
