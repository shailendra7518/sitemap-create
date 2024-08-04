import { useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import { clutchWidgetScript } from "~/helpers/clutchWidgetScript";
import NavLink from "../NavLink";

const EstimationBanner = () => {
  useEffect(() => {
    const destroyClutchScript = clutchWidgetScript();
    return destroyClutchScript();
  }, []);

  return (
    <>
      <section className="project-survey">
        <div className="container">
          <div className="row project-survey-inner align-items-center justify-content-between pt-3 pb-md-3 py-lg-4">
            <div className="col-md-8 col-lg-7">
              <h2 className="project-survey-title m-0">
                Request a project and get free estimates for timeline and
                pricing
              </h2>
              <h2 className="project-survey-details pt-2 py-lg-2">
                Your technology partner for innovative and impactful digital
                solutions.
              </h2>

              <NavLink
                classes="main-btn shadow-none px-3 py-2 me-3 my-2 mb-4 mb-md-0"
                href="/project-survey"
              >
                Let's try Survey
                <GoArrowRight className="right-arrow ms-1" role="presentation" />
              </NavLink>
              <div className="d-flex m-auto m-sm-0 align-items-center py-4">
                <div
                  className="clutch-widget"
                  data-url="https://widget.clutch.co"
                  data-widget-type="1"
                  data-height="45"
                  data-nofollow="true"
                  data-expandifr="true"
                  data-clutchcompany-id="1666446"
                ></div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 d-none d-md-block">
              <img
                className="img-fluid"
                width="397"
                height="400"
                src="/images/survey-thumbnail.png"
                alt="Request a project and get free estimates for timeline and pricing"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <script
        defer
        type="text/javascript"
        src="https://widget.clutch.co/static/js/widget.js"
      ></script>
    </>
  );
};
export default EstimationBanner;
