import { processesWithDescription } from "~/constants/processWithDesc";
import Process from "~/modules/Home/HowWeWork/Process";

const WaterfallMethod = () => {
  return (
    <section className="waterfall-method">
      <div className="container">
        <h4 className="content-sub-title mt-5">
          Flexible at the core. Organized to stay in sync
        </h4>
        <h2 className="content-title  mb-4">Engaging with Waterfall Method</h2>
        <div className="container mt-5 pt-4 mb-5">
          <div className="process">
            {processesWithDescription.section.map((process, index) => (
              <Process processItem={process} key={index} index={index} />
            ))}
          </div>
        </div>
        <p className="content-details">
          The waterfall methodology is broken down into linear, sequential
          phases with each phase dependent on the deliverable of the previous
          phase of your project. The lifecycle of a project under this method
          can be summarised under five segments: discovery, definition, design,
          development, and delivery.
        </p>
        <p className="content-details">
          To understand if your project falls into Waterfall Project Management,
          it needs to take into account assumptions made about the project,
          project constraints, the project objective, its business needs, and
          the acceptance criteria of the project among other things. If all
          these factors are well defined and measurable, then waterfall method
          works for your project.
        </p>
        <p className="content-details">
          Because your project will have relatively defined features and
          functionality, A software requirement document (SRS) will be laid out
          to describe expectations and scope of the project which will be used
          till the final handoff of the project.
        </p>
        <h2 className="content-title  mt-5 mb-3">
          What if my requirements evolve?
        </h2>
        <p className="content-details">
          Because of the uniqueness of every project, there are bound to be
          uncertainties during its execution. This could be anything from buggy
          third-party dependencies to change in existing scope. We make sure
          these uncertainties are identified and planned for by managing risks
          for your projects.
        </p>
        <p className="content-details">
          Additionally we take the time to plan out the various aspects of a
          project before execution, but things are bound to change as time goes
          on. ‘Change is the only constant’ thing in a project. Hence we have a
          system put in place to manage these changes. We measure the impact of
          changes on the existing scope, and calculate the time and cost that
          comes with the changes. Finally, we make sure we update the SRS
          document.
        </p>
        <p className="content-details">
          The Waterfall Process continues as it is meant to be, with Quality
          Assurance Process in the end to make sure our project deliverables
          tally with the predefined or revised scope of the project.
        </p>
      </div>
    </section>
  );
};

export default WaterfallMethod;
