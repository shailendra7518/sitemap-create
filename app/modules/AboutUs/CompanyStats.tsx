import { Link } from "@remix-run/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef } from "react";
import projectStates from "~/constants/projectStates";
gsap.registerPlugin(ScrollTrigger);

const CompanyStats = () => {
  const stats = useRef<HTMLElement>(null);
  useEffect(() => {
    const statsSections = gsap.utils.selector(stats);

    const companyStats = gsap.context(() => {
      gsap.from(statsSections(".company-stats-counter"), {
        scrollTrigger: {
          trigger: statsSections(".company-stats-counter"),
          start: "top 90%",
          toggleActions: "play none none reset",
        },
        textContent: 10,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        stagger: 1,
      });
    });

    return () => {
      companyStats.revert();
    };
  }, []);

  return (
    <section className="company-stats" ref={stats}>
      <div className="container">
        <div className="company-stats-header pt-5 mt-md-4 pb-5">
          <h2 className="company-stats-header-heading text-uppercase">
            [ results you must expect from us ]
          </h2>
          <h3 className="company-stats-header-title fw-bold">
            Join the 100% delighted clients who are gladly "willing to refer" us
          </h3>
          <h4 className="company-stats-header-subtitle">
            A perfect 100% rate us 4/5 or higher{" "}
            <span>
              <Link
                className="company-stats-header-subtitle-link"
                target="_blank"
                to="https://clutch.co/profile/techstaunch-software-solutions#highlights"
                aria-label="Clutch highlights of TechStaunch"
              >
                Proven stats by Clutch.
              </Link>
            </span>
          </h4>
        </div>
        <div className="row mt-5">
          {projectStates.map((state, index) => (
            <div
              className="col-md-6 col-lg-3 text-center company-stats-inner"
              key={`stats-${index}`}
            >
              {state.icon}
              {state.isCounter ? (
                <div className="d-flex justify-content-center">
                  <h2 className="company-stats-title company-stats-counter mt-sm-4 mt-0 mb-sm-3 mb-0">
                    {state.title}
                  </h2>
                  <h2 className="company-stats-title mt-sm-4 mt-0 mb-sm-3 mb-0">
                    &nbsp;
                    {state.sign}
                  </h2>
                </div>
              ) : (
                <h2 className="company-stats-title mt-4 mb-3">
                  {state.title}&nbsp;{state.sign}
                </h2>
              )}
              <h2 className="company-stats-sub-title">{state.subtitle}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
