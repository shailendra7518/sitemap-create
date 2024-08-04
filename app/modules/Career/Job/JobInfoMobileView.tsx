import { useState } from "react";
import { jobTabInfo } from "~/constants/jobTabInfo";
export interface JobInfoMobileViewProps {
  jobInfo: any;
  active: string;
}

const JobInfoMobileView = ({ jobInfo, active }: JobInfoMobileViewProps) => {
  const jobLongInfo = Object.entries(jobInfo);

  const [panel, setPanel] = useState<any>(active);

  return (
    <section className="web-technologies">
      <div className="container">
        <div className="custom-tabs">
          <ul className="custom-tabs__list">
            {jobTabInfo.map((tab, i) => {
              return (
                <li
                  key={`${tab.name} - ${i}`}
                  className={panel === tab.property ? "active" : ""}
                  onClick={() => setPanel(tab.property)}
                >
                  {tab.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className="job-info-application-container d-flex flex-row gap-4">
            {jobLongInfo.map((infoArray, i) => {
              if (infoArray[0] === panel) {
                if (typeof infoArray[1] === "string") {
                  return (
                    <div key={`Data element - ${i}`}>
                      <p>{infoArray[1]}</p>
                    </div>
                  );
                } else {
                  const content = Object.entries(
                    infoArray[1] ? infoArray[1] : []
                  );
                  return (
                    <ul>
                      {infoArray[0] !== "location"
                        ? content.map((item, i) => {
                            return (
                              <li key={`Inner element - ${i}`}>{item[1]}</li>
                            );
                          })
                        : content.map((item: any, i) => {
                            return (
                              <li key={`Address - ${i}`}>
                                {item[1].address}, {item[1].city},
                                {item[1].state} - {item[1].pincode}.
                              </li>
                            );
                          })}
                    </ul>
                  );
                }
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobInfoMobileView;
