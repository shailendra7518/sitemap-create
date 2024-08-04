import { clientReviewProcess } from "~/constants/clientReviewProcess";
import AppServiceCard from "../AppServices/AppServiceCard";

const ClientReviewProcess = () => {
  return (
    <section className="client-review-process pt-5 pb-3">
      <div className="container">
        <h2 className="content-title">{clientReviewProcess.title}</h2>
        <p className="content-details">{clientReviewProcess.description}</p>
        <div className="row">
          {clientReviewProcess.cardPoints.map((cardPoint, index) => (
            <AppServiceCard cardData={cardPoint} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviewProcess;
