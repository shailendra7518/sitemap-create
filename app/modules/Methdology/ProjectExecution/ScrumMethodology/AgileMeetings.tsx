import AgileImage from "~/components/AgileImage";

const AgileMeetings = () => {
  return (
    <article className="container">
      <h2 className="content-title mt-5 mb-3">Agile Meetings</h2>
      <p className="content-details">
        We have three key scrum roles. There is the product owner ーthe one who
        came up with the idea for the product, the scrum master who ensures the
        team members follow the agile principles and value, and then the team
        members themselves; they are ideally a team of seven cross-functional
        members.
      </p>
      <AgileImage />
    </article>
  );
};

export default AgileMeetings;
