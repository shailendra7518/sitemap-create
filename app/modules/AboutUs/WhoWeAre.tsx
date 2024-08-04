import { GoArrowRight } from "react-icons/go";
import AnimatedStackCards from "~/components/AnimatedStackCards/AnimatedStackCards";
import NavLink from "~/components/NavLink";
import { whoWeAre } from "~/constants";

const WhoWeAre = ({ about }: any) => {
  return (
    <section className="who-we-are h-100">
      <div className="stack-cards content-card">
        <div className="container animated-card-banner">
          <AnimatedStackCards data={about} />
          <div>
            <div className="header-title py-2">
              <h1>
                <span className="fw-bold"> {whoWeAre.title} </span>
                {whoWeAre.subtitle}
              </h1>
            </div>
            <div className="About-detail">
              <p className="mb-lg-4 mb-2">{whoWeAre.para1}</p>
              <p className="mb-lg-4">{whoWeAre.para2}</p>

              <NavLink
                classes="main-btn shadow-none px-4 py-2"
                href="/services/web-development"
              >
                Our Services
                <GoArrowRight className="right-arrow ms-2" role="presentation" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
