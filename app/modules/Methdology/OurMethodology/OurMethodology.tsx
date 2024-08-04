import MethodologyCard from "~/components/MethodologyCard/MethodologyCard";
import { ourMethodology } from "~/constants/ourMethodology";

const OurMethodology = () => {
  return (
    <section className="our-methodology mt-md-5">
      <div className="container">
        <div className="our-technologies-heading">
          <div className="heading text-center justify-content-center">
            <h2>
              <span className="fw-bold"> Our </span> Methodology
            </h2>
          </div>
          <p className="heading-sub-title py-2 text-center">Learn more on</p>
        </div>
        <div className="row mb-3">
          {ourMethodology.map((data, index) => (
            <MethodologyCard cardData={data} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMethodology;
