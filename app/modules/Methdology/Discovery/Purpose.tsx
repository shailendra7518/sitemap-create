import { discoveryPurpose } from "~/constants/discoveryPurpose";
const Purpose = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-5  col-lg-5 col-md-12 text-center text-lg-start">
            <img
              className="img-fluid"
              src={discoveryPurpose.image}
              alt={discoveryPurpose.alt}
            />
          </div>
          <div className=" col-xl-7 col-lg-7 col-md-12 banner-text pt-lg-5 mb-5 mt-5 mt-lg-0">
            <div className="heading">
              <h2>
                <span className="fw-bold"> {discoveryPurpose.title} </span>{" "}
                {discoveryPurpose.halftitle}
              </h2>
            </div>
            <p className="banner-detail mb-4 ">
              {discoveryPurpose.description1}
            </p>
            <p className="banner-detail mb-4 ">
              {discoveryPurpose.description2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
