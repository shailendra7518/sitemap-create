import { urlFor } from "~/root";
import LeaderCard from "./LeaderCard";
import TeamSlider from "./TeamSlider";

const OurTeam = ({ career }: any) => {
  return (
    <section className="our-team">
      <div className="container">
        <div className="our-team-heading heading text-center justify-content-center">
          <h2>
            <span className="fw-bold me-2"> Our </span>Team
          </h2>
        </div>
        <div className="team-head d-flex justify-content-around ">
          <div className="position-relative me-5 ">
            <LeaderCard
              name="Riddhi P"
              position="Founder"
              icon={urlFor(career.founder).url()}
            />
          </div>
          <div className="position-relative me-2 me-sm-0 ">
            <LeaderCard
              name="Hiren Faldu"
              position="Tech Lead"
              icon={urlFor(career.techlead).url()}
            />
          </div>
        </div>
      </div>

      <div className="slider-container">
        <h4 className="team-member-title text-center">Team members</h4>
        <TeamSlider team={career.team} />
      </div>
    </section>
  );
};

export default OurTeam;
