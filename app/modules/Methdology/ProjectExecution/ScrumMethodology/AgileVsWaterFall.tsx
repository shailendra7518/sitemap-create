import { agileWorks } from "~/constants/agileWorks";

const AgileVsWaterFall = () => {
  return (
    <>
      <h2 className="content-title  mt-5 mb-3">Agile Vs Waterfall</h2>
      <img
        className="my-5 d-none d-lg-block"
        src="/images/working-process.svg"
        alt="work-process"
      />
      <img
        className="my-5 d-block d-lg-none"
        src="/images/working-process-vertical.svg"
        alt="working-process-vertical"
      />
      <h2 className="content-title  mt-5 mb-3">
        When does Agile Project Execution Model Work?
      </h2>
      <div className="row my-5">
        {agileWorks.map((description, index) => (
          <div
            className="col-lg-4 col-md-6 mb-2"
            key={`agilevswaterfall-${index}`}
          >
            <div className="model-working bg-transparent me-3 pe-3 ">
              <img
                src="/images/icons/check-bullets.svg"
                className="tick-mark mb-3"
                alt=""
              />
              <h3 className="content-details pb-2" key={index}>
                {description}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AgileVsWaterFall;
