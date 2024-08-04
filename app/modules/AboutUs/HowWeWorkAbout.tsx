import { processesWithDescription } from "~/constants/processWithDesc";
import Process from "../Home/HowWeWork/Process";

const HowWeWorkAbout = () => {
  return (
    <section
      className="how-we-work bg-transparent py-0 py-sm-5"
      id={processesWithDescription.id}
    >
      <div className="container pt-5">
        <div className="row pb-5">
          <div className="we-work-heading text-lg-start text-md-center pt-sm-5 ">
            <div className="heading text-center my-0 my-sm-5">
              <h2>
                <span className="fw-bold me-2"> How </span> We work
              </h2>
            </div>
          </div>
        </div>
        <div className="container mt-5 mb-5">
          <div className="process">
            {processesWithDescription.section.map((process, index) => (
              <Process processItem={process} key={index} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkAbout;
