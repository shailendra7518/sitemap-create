import { clientProblems } from "~/constants/clientProblem";

const ClientProblems = () => {
  return (
    <section className="client-problems dark-background py-5 mt-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <h2 className="content-title text-center">
              {clientProblems.title}
            </h2>
            <p className="content-sub-title text-center">
              {clientProblems.subtitle}
            </p>
          </div>
        </div>
        <div className="banner">
          <div className="container">
            <div className="row align-items-center">
              <div className=" col-lg-6 col-md-12 text-center order-lg-2  ">
                <img
                  className="img-fluid mt-5"
                  src={clientProblems.image}
                  alt={clientProblems.alt}
                />
              </div>
              <div className=" col-lg-6 col-md-12 banner-text pt-lg-5 mt-5 mt-lg-0 order-lg-1">
                <div className="list-details">
                  <ul className="ps-4 list-unstyled">
                    {clientProblems.points.map((point, index) => (
                      <li
                        className="detail-list d-flex align-items-center mt-4 mb-2"
                        key={index}
                      >
                        <div className="list-number px-3 py-1 rounded me-3">
                          {index + 1}
                        </div>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientProblems;
