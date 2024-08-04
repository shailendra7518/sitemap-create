import { learntUiUx } from "~/constants/learntUiUx";
import LearnUiUxCard from "./LearnUiUxCard";

const LearntUiUx = () => {
  return (
    <div className="container">
      <h2 className="content-title mb-4">{learntUiUx.title}</h2>
      <p className="content-details">{learntUiUx.description}</p>
      {learntUiUx.learntItems.map((item, index) => (
        <LearnUiUxCard data={item} key={index} />
      ))}
    </div>
  );
};

export default LearntUiUx;
