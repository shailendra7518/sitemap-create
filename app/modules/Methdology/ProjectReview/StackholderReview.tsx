import AlternateWithPoints from "~/components/AlternateSide/AlternateWithPoints";
import NonActiveCard from "~/components/NonActiveCard";
import { reviewProcess } from "~/constants/ReviewProcess";
import { stackholderInReviews } from "~/constants/stackholderInReviews";

const StackholderReview = () => {
  return (
    <section className="review-process">
      <div className="container">
        <h2 className="content-title text-center mb-5">
          Stakeholders In Review Process
        </h2>
        <div className="row">
          {stackholderInReviews.map((data, index) => (
            <NonActiveCard cardData={data} key={index} col="3" />
          ))}
        </div>

        <div className="banner">
          <div className="container">
            <AlternateWithPoints data={reviewProcess} numbers={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackholderReview;
