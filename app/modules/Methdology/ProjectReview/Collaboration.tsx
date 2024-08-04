import AgileImage from "~/components/AgileImage";
import { collaborationText } from "~/constants/collaborationText";
import CollaborationCard from "./CollaborationCard";

const Collaboration = () => {
  return (
    <section className="collaboration">
      <div className="container">
        <h2 className="content-title mb-4 text-center">
          Collaboration ⇒ Lot of Feedback
        </h2>
        <AgileImage />
        <div className="row mt-4">
          {collaborationText.map((data, index) => (
            <CollaborationCard data={data} key={`collaboration-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
