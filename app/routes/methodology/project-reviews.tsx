import { type LinksFunction } from "@remix-run/node";
import { methodology } from "~/constants/methology";
import UseLazyLoad from "~/helpers/useLazyLoad";
import MethodologyBanner from "~/modules/Methdology/MethodologyBanner/MethodologyBanner";
import AllItTakes from "~/modules/Methdology/ProjectReview/AllItTakes";
import BreakingBad from "~/modules/Methdology/ProjectReview/BreakingBad";
import ClientReviewProcess from "~/modules/Methdology/ProjectReview/ClientReviewProcess";
import Collaboration from "~/modules/Methdology/ProjectReview/Collaboration";
import PeopleReview from "~/modules/Methdology/ProjectReview/PeopleReview";
import StackholderReview from "~/modules/Methdology/ProjectReview/StackholderReview";
import methodologyCSS from "../../styles/methodology.css";
export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: methodologyCSS,
    },
  ];
};
const ProjectReviews = () => {
  return (
    <>
      <MethodologyBanner
        title={methodology[3].title}
        description={methodology[3].description}
        coverImage={methodology[3].coverImage}
      />
      <UseLazyLoad>
        <PeopleReview />
        <Collaboration />
        <BreakingBad />
        <ClientReviewProcess />
        <StackholderReview />
        <AllItTakes />
      </UseLazyLoad>
    </>
  );
};

export default ProjectReviews;
