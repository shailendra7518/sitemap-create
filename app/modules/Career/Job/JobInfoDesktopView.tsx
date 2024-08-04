import { RegularButton } from "~/components/Buttons";

const JobInfoDesktopView = ({ jobInfo, emailTo }: any) => {
  return (
    <div className="job-info-container">
      <div className="blog__data w-100 d-flex flex-column">
        {!!jobInfo.description && (
          <div className="d-flex flex-column mb-4 align-items-baseline inner-big-side">
            <h2>Description</h2>
            <p>{jobInfo.description}</p>
          </div>
        )}
        {jobInfo.skills &&
          !!jobInfo.skills.filter((d: string) => !!d).length && (
            <div className="d-flex flex-column mb-4 inner-small-side">
              <h2>Skillset Required</h2>
              <ul>
                {jobInfo.skills.map((skill: any, i: number) => {
                  return <li key={`Skill - ${i}`}>{skill}</li>;
                })}
              </ul>
            </div>
          )}

        {jobInfo.roles && !!jobInfo.roles.length && (
          <div className="d-flex flex-column mb-4 inner-big-side">
            <h2>Roles</h2>
            <ul>
              {jobInfo.roles.map((role: any, i: number) => {
                return <li key={`Role - ${i}`}>{role}</li>;
              })}
            </ul>
          </div>
        )}

        {jobInfo.location && !!jobInfo.location.length && (
          <div className="d-flex flex-column mb-4 inner-small-side">
            <h2>Location</h2>
            <ul>
              {jobInfo.location.map((place: any, i: number) => {
                return (
                  <li key={`Address - ${i}`}>
                    {place.address}, {place.city}, {place.state} -{" "}
                    {place.pincode}.
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <a href={`mailto:${emailTo}`} className="text-decoration-none m-auto">
          <div className="mt-4">
            <RegularButton classes="px-5 py-2 fs-4">Apply</RegularButton>
          </div>
        </a>
      </div>
    </div>
  );
};

export default JobInfoDesktopView;
