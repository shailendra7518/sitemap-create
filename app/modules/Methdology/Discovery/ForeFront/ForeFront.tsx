import { forefront } from "~/constants/foreFront";
import NonActiveCard from "../../../../components/NonActiveCard";

const ForeFront = () => {
  return (
    <section className="forefronts">
      <div className="container">
        <h2 className="content-title text-center mb-3 pb-4">
          Forefronts of Discovery Workshop
        </h2>
        <div className="row mb-3">
          {forefront.map((data, index) => (
            <NonActiveCard cardData={data} col="4" key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForeFront;
