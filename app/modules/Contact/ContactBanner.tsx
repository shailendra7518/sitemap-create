import { useEffect, useState } from "react";
import AnimatedStackCards from "~/components/AnimatedStackCards/AnimatedStackCards";
import { contactBanner } from "~/constants/contactBanner";
import { emailID } from "~/constants/emailID";
import { clutchWidgetScript } from "~/helpers/clutchWidgetScript";
import { goodFirmsWidgetScript } from "~/helpers/goodFirmsWidgetScript";

const ContactBanner = ({ contact }: any) => {
  const [widgetsLoaded, setWidgetsLoaded] = useState(false);

  useEffect(() => {
    const destroyClutchScript = clutchWidgetScript();
    const destroyGoodFirmsScript = goodFirmsWidgetScript();
    setWidgetsLoaded(true);
    return () => {
      destroyClutchScript();
      destroyGoodFirmsScript();
    };
  }, []);

  return (
    <section className="contact-banner">
      <div className="container">
        <div className="row justify-content-between">
          <div className="contact-banner-content col-lg-6 col-md-6 ps-md-4 order-2 order-md-1 pe-5">
            <h1 className="contact-title pe-5 pb-2 ">{contactBanner.title}</h1>
            <span className="contact-banner-details mb-lg-4 pe-3">
              {contactBanner.intro}
              <br />
              <br />
              {contactBanner.summon}
              <span className="ms-2">
                <a href={`mailto:${emailID}`}>{emailID}</a>
              </span>
            </span>
            <div className="contact-reviews align-content-center d-lg-flex m-sm-0 ">
              <div className="glassdoor-logo m-sm-0 pt-3 pb-lg-4">
                <svg
                  width="120"
                  height="50"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 120 50"
                >
                  <a
                    href="https://www.glassdoor.co.in/Reviews/TechStaunch-Reviews-E6609654.htm"
                    target="_blank"
                    aria-label="Glassdoor reviews of TechStaunch"
                  >
                    <rect x="0" y="0" width="120" height="50" fill="black" />
                    <text
                      x="10"
                      y="20"
                      fontFamily="Arial"
                      fontSize="19"
                      fill="white"
                      fontWeight="bold"
                    >
                      glassdoor
                    </text>
                    <text
                      x="10"
                      y="40"
                      fontFamily="Arial"
                      fontSize="14"
                      fill="white"
                      fontWeight="bold"
                    >
                      4.4 | &#9733;&#9733;&#9733;&#9733;&#9733;
                    </text>
                    <rect
                      x="0"
                      y="0"
                      width="120"
                      height="50"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </a>
                </svg>
              </div>
              <div>
                {widgetsLoaded && (
                  <div
                    className="goodfirm-widget pt-2"
                    data-widget-type="goodfirms-widget-t8"
                    data-widget-pattern="poweredby-star"
                    data-height="60"
                    data-company-id="71915"
                  ></div>
                )}
              </div>
            </div>
            <div className="contact-reviews m-sm-0 align-items-center">
              {widgetsLoaded && (
                <div
                  className="clutch-widget"
                  data-url="https://widget.clutch.co"
                  data-widget-type="2"
                  data-height="45"
                  data-nofollow="true"
                  data-expandifr="true"
                  data-clutchcompany-id="1666446"
                ></div>
              )}
            </div>
          </div>
          <div className="col-lg-5 col-md-6 order-1 order-md-2 animated-cards-contact">
            <div className="stack-cards">
              <div className="container animated-card-banner">
                <AnimatedStackCards data={contact} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
