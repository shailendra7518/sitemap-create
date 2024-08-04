import { workingMethodology } from "~/constants/workingMethodology";
import ContentCard from "../Discovery/Content/ContentCard";

const WorkingMethodology = () => {
  return (
    <section className="working-methods">
      <div className="container">
        <div className="heading text-center mb-5 py-2">
          <h2>
            <span className="fw-bold"> {workingMethodology.title} </span> {workingMethodology.halftitle}
          </h2>
        </div>
        <div className="d-flex flex-column flex-md-row gap-md-4 mt-4">
          {workingMethodology.items.map((item, index) => (
            <ContentCard cardData={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingMethodology;
