import { Link } from "@remix-run/react";
import { FaArrowRight } from "react-icons/fa";
import { startUpClutchBadges } from "~/constants";
import { companyExpertise } from "~/constants/companyExpertise";

const StartUpSupport = () => {
  return (
    <section className="start-up-support-section">
      <div className="container">
        <div className="start-up-support-section-inner">
          <h2>
            Our support throughout the startup lifecycle and <span>Beyond</span>
          </h2>
          <div className="start-up-support-description">
            <div className="start-up-support-expertise-table">
              {companyExpertise.map((benefit, index) => (
                <p key={index}>{benefit}</p>
              ))}
            </div>
            <div className="start-up-support-clutch-description">
              <h2>
                <span>“100% client </span>satisfaction score on
                <span> clutch” </span>
              </h2>
              <div className="start-up-support-badges-container">
                {startUpClutchBadges.map((data, index) => (
                  <img
                    src={data.image}
                    alt={data.alternate}
                    className="clutch-badges-img cursor-pointer"
                    key={index}
                    loading="lazy"
                    onClick={() => {
                      if (typeof window !== "undefined")
                        window.open(
                          data.link,
                          "newwindow",
                          "width=1280,height=800"
                        );
                    }}
                  />
                ))}
              </div>
              <Link
                className="align-items-center"
                target="_blank"
                to="https://clutch.co/profile/techstaunch-software-solutions"
                aria-label="Clutch highlights of TechStaunch"
              >
                Link to the clutch's portal
                <FaArrowRight role="presentation" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartUpSupport;
