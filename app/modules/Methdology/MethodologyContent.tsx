import { methodologyContent } from "~/constants/methodologyContent";

const MethodologyContent = () => {
  return (
    <section className="mt-5 pt-4">
      <div className="container">
        <h2 className="content-title mb-4">{methodologyContent.title}</h2>
        <p className="content-details">{methodologyContent.description1}</p>
        <p className="content-details">{methodologyContent.description2}</p>
        <div className="d-flex justify-content-center my-5 ">
          <img
            className="img-fluid p-5"
            src={methodologyContent.image}
            alt={methodologyContent.title}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default MethodologyContent;
