import JobCard from "./JobCard";

const Hiring = ({ vacancy }: any) => {
  return (
    <section className="opening-job-position">
      <div className="container">
        <div className="row">
          <div className="hiring-content text-center">
            <h1 className="hiring-title">We’re Hiring!</h1>
            <p className="hiring-details m-0" role="heading" aria-level={2}>
              We are TechStaunch — a powerful team of top performers.
            </p>
            <p className="hiring-details" role="heading" aria-level={2}>Become one of us!</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5 justify-content-center">
          {vacancy.map((job: any, index: any) => (
            <div className="col-5 m-3 p-2 hiring-card" key={`jobs-vacancy-${index}`}>
              <JobCard job={job} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hiring;
