import NonActiveCard from "~/components/NonActiveCard";
import { scrumRole } from "~/constants/scrumRole";

const RoleInScrum = () => {
  return (
    <>
      <h2 className="content-title  mt-4 mb-3">Roles in SCRUM</h2>
      <p className="content-details">
        We have three key scrum roles. There is the product owner ーthe one who
        came up with the idea for the product, the scrum master who ensures the
        team members follow the agile principles and value, and then the team
        members themselves; they are ideally a team of seven cross-functional
        members.
      </p>
      <div className="row">
        {scrumRole.map((data, index) => (
          <NonActiveCard cardData={data} key={index} col="4"/>
        ))}
      </div>
    </>
  );
};

export default RoleInScrum;
