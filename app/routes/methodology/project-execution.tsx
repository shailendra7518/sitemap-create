import { type LinksFunction } from "@remix-run/node";
import MethodologySlider from "~/components/MethodologySlider/MethodologySlider";
import { methodology } from "~/constants/methology";
import { waterfallUsecases } from "~/constants/waterfallUsecases";
import UseLazyLoad from "~/helpers/useLazyLoad";
import MethodologyBanner from "~/modules/Methdology/MethodologyBanner/MethodologyBanner";
import HowToEngage from "~/modules/Methdology/ProjectExecution/HowToEngage";
import AgileMeetings from "~/modules/Methdology/ProjectExecution/ScrumMethodology/AgileMeetings";
import AgileUsecases from "~/modules/Methdology/ProjectExecution/ScrumMethodology/AgileUsecases";
import ScrumMethodology from "~/modules/Methdology/ProjectExecution/ScrumMethodology/ScrumMethodology";
import WaterfallMethod from "~/modules/Methdology/ProjectExecution/WaterfallMethod";
import WorkingMethodology from "~/modules/Methdology/ProjectExecution/WorkingMethodology";
import aboutCSS from "~/styles/about.css";
import methodologyCSS from "../../styles/methodology.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: methodologyCSS,
    },
    {
      rel: "stylesheet",
      href: aboutCSS,
    },
  ];
};
const ProjectExecution = () => {
  return (
    <>
      <MethodologyBanner
        title={methodology[2].title}
        description={methodology[2].description}
        coverImage={methodology[2].coverImage}
      />
      <UseLazyLoad>
        <WorkingMethodology />
        <HowToEngage />
        <WaterfallMethod />
        <MethodologySlider data={waterfallUsecases} />
        <ScrumMethodology />
        <AgileMeetings />
        <AgileUsecases />
      </UseLazyLoad>
    </>
  );
};

export default ProjectExecution;
