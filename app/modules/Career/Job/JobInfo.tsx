import { Link } from "@remix-run/react";
import { careerEmailID } from "~/constants/emailID";
import useJobSchema from "../../../hooks/useJobSchema";
import JobInfoDesktopView from "./JobInfoDesktopView";
import JobInfoTitleBanner from "./JobInfoTitleBanner";
import { MdKeyboardArrowLeft } from "react-icons/md";

const JobInfo = (props: any) => {
  const jobInfo = props.jobInfo.jobInformation;
  const schemaData = useJobSchema({ jobInfo });

  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `${schemaData}`,
        }}
      ></script>
      <div className="blog mt-8-percent">
        <div className="job-details-main-container">
          <div className="container">
            <div className="blog__content">
              <div className="back-button my-3">
                <Link
                  to="/career"
                  className="text-decoration-none text-theme d-sm-block d-none"
                >
                  <MdKeyboardArrowLeft role="presentation" className="mb-1" />
                  <span className="ps-1">Back</span>
                </Link>
              </div>

              <JobInfoTitleBanner jobInfo={jobInfo} emailTo={careerEmailID} />
              <JobInfoDesktopView jobInfo={jobInfo} emailTo={careerEmailID} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobInfo;
