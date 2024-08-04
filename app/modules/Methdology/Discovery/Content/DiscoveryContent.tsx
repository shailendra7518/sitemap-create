import { contentCard } from "~/constants/contentCard";
import { discoveryContent } from "~/constants/discoveryContent";
import ContentCard from "./ContentCard";

const DiscoveryContent = () => {
  return (
    <section className="mt-5">
      <div className="container">
        <h2 className="content-title mb-2">{discoveryContent.title}</h2>
        <p className="content-details">{discoveryContent.description1}</p>
        <div className="d-flex justify-content-center my-5 ">
          <img
            className="img-fluid p-lg-5"
            src={discoveryContent.logo}
            alt="How it work"
          />
        </div>
        <p className="content-details">{discoveryContent.description2}</p>
        <div className="row mt-5">
          {contentCard.map((data, index) => (
            <ContentCard cardData={data} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoveryContent;
