import moment from "moment";
import { FaClock, FaBriefcase, FaRupeeSign } from "react-icons/fa";
import { RegularButton } from "~/components/Buttons";
import { urlFor } from "~/root";

const JobInfoTitleBanner = ({ jobInfo, emailTo }: any) => {
  const timeAgo = (date: string) => moment(new Date(date)).fromNow();
  return (
    <div className="mt-4 pt-4 d-flex flex-sm-row flex-column justify-content-between align-items-center flex-wrap">
      <div className="inner-big-side">
        <div className="job-info-title-content d-flex flex-column gap-3 justify-content-sm-start justify-content-center">
          <div className="d-flex align-items-center gap-4">
            <img
              className="job-title-image"
              src={urlFor(jobInfo.image).url()}
              alt={jobInfo.title}
            />
            <h1 className="blog__title">{jobInfo.title}</h1>
          </div>
          <div
            className={`job-info-title-sub-content d-flex justify-content-between flex-row align-items-sm-start`}
          >
            <p className="job-info-title-sub-main-content d-flex flex-row align-items-center">
              <FaClock />
              {timeAgo(
                jobInfo.postingDate ? jobInfo.postingDate : jobInfo._createdAt
              )}
            </p>
            <p className="job-info-title-sub-main-content d-flex flex-row">
              <FaBriefcase /> {jobInfo.jobType}
            </p>

            <p className="job-info-title-sub-main-content d-flex flex-row">
              {jobInfo.ctc && (
                <>
                  <FaRupeeSign /> {jobInfo.ctc}
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      <a
        href={`mailto:${emailTo}`}
        className="text-decoration-none d-none d-md-block text-lg-start text-center inner-small-side"
      >
        <RegularButton classes="px-3">Apply</RegularButton>
      </a>
    </div>
  );
};

export default JobInfoTitleBanner;
