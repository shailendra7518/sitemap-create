import { processesWithDescription } from "~/constants/processWithDesc";
import Process from "./Process";

const HowWeWork = () => {
  return (
    <>
      <section
        className="how-we-work h-100 pb-4 mb-3"
        id={processesWithDescription.id}
      >
        <div className="container">
          <div className="row">
            <div className="we-work-heading  text-lg-start text-md-center pt-5 mt-md-4 pb-5 justify-content-start">
              <div className="heading text-center text-sm-start">
                <h2>
                  <span className="fw-bold"> How </span> we Work
                </h2>
              </div>
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
      </section>
    </>
  );
};

export default HowWeWork;
