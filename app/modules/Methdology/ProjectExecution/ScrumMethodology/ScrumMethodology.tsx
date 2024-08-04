import AgileVsWaterFall from "./AgileVsWaterFall";
import DeliverablesInAgile from "./DeliverablesInAgile";
import RoleInScrum from "./RoleInScrum";

const ScrumMethodology = () => {
  return (
    <section className="project-work-diagram">
      <div className="container">
        <h2 className="content-title  mt-5">
          Engaging with Agile SCRUM Method
        </h2>
        <h4 className="content-sub-title">
          Continuous Iteration. Quicker Risk Mitigation
        </h4>
        <p className="content-details">
          The SCRUM methodology is an implementation of the Agile project
          management approach that requires continuous iteration of development
          and testing in the software development lifecycle process. Both
          development and testing activities are concurrent unlike the Waterfall
          model.
        </p>
        <AgileVsWaterFall />
        <RoleInScrum />
        <DeliverablesInAgile />
      </div>
    </section>
  );
};

export default ScrumMethodology;
