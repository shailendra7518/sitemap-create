import { Link } from "@remix-run/react";
import React from "react";
import { urlFor } from "~/root";

const JobCard: React.FC<{ job: any }> = ({ job }) => {
  return (
    <div>
      <Link
        to={`/career/${job.slug.current}`}
        className="text-decoration-none hiring-cards"
      >
        <div className="row position-opening px-2 py-4 py-md-2">
          <div className="col-lg-2 col-md-3 d-flex ">
            {job.image && (
              <img
                className="img-fluid p-xl-2"
                width="75"
                height="75"
                src={urlFor(job.image).url()}
                alt={"Technology image for "+ job?.title}
              />
            )}
          </div>
          <div className="col-lg-7 col-md-9 my-auto">
            <h2 className="job-position-title mt-4">
              {job?.title} <br />
            </h2>
            <p className="job-position-details">{job.shortDescription}</p>
          </div>
          <div className="col-lg-3 d-flex align-items-center justify-content-lg-center">
            <p className="m-0 job-positions">
              {job.vacancy} {job.vacancy > 1 ? "Positions" : "Position"}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default JobCard;
