import { uiuxDesign } from "~/constants/uiuxDesign";

const UiUxDesign = () => {
  return (
    <section className="ui-ux-design-details mt-5">
      <div className="container">
        <div className="heading text-center mb-4">
          <h2>
            <span className="fw-bold"> {uiuxDesign.title} </span>{" "}
            {uiuxDesign.halftitle}
          </h2>
        </div>
        <p className="content-details">{uiuxDesign.description}</p>
        <div className="row row-cols-1 row-cols-lg-2 mb-5 mb-lg-3">
          <div className="col ">
            <ul className="ps-4 detail-list-group ms-3">
              {uiuxDesign.leftpoints.map((point, index) => (
                <li className="detail-list my-lg-5 my-3" key={index}>
                  <span className=" list-content position-relative">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col ">
            <ul className="ps-4 detail-list-group ms-3 ">
              {uiuxDesign.rightpoints.map((point, index) => (
                <li className="detail-list my-lg-5 my-3" key={index}>
                  <span className=" list-content position-relative">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UiUxDesign;
