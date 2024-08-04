import { echoMeeting } from "~/constants/echoMeeting";

const EchoMeeting = () => {
  return (
    <section className="echo-meetings mt-5">
      <div className="container">
        <h2 className="content-title">{echoMeeting.title}</h2>
        <p className="content-details">{echoMeeting.description1}</p>
        <p className="content-details">{echoMeeting.description2}</p>
        <div className="row align-items-center position-relative">
          <div className=" col-lg-6 col-md-12 text-center order-lg-2  ">
            <img
              className="img-fluid mt-3"
              src={echoMeeting.image}
              alt={echoMeeting.alternate}
            />
          </div>
          <div className=" col-lg-6 col-md-12 banner-text position-lg-absolute ms-auto  pt-lg-3 mt-3 order-lg-1">
            <div className="list-details">
              <ul className="ps-2 ps-sm-0 list-unstyled">
                {echoMeeting.points.map((point, index) => (
                  <li
                    className="detail-list d-flex align-items-center my-3"
                    key={`echoMeeting-${index}`}
                  >
                    <div className="list-number px-3 px-sm-4 py-1 rounded me-3">
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
    </section>
  );
};

export default EchoMeeting;
