import { type LinksFunction } from "@remix-run/node";
import { methodology } from "~/constants/methology";
import UseLazyLoad from "~/helpers/useLazyLoad";
import ClientOverlook from "~/modules/Methdology/Discovery/ClientOverlook/ClientOverlook";
import ClientProblems from "~/modules/Methdology/Discovery/ClientProblems";
import DiscoveryContent from "~/modules/Methdology/Discovery/Content/DiscoveryContent";
import ForeFront from "~/modules/Methdology/Discovery/ForeFront/ForeFront";
import LearntUiUx from "~/modules/Methdology/Discovery/LearntUiUx/LearntUiUx";
import Purpose from "~/modules/Methdology/Discovery/Purpose";
import UiUxDesign from "~/modules/Methdology/Discovery/UiUXDesign/UiUxDesign";
import MethodologyBanner from "~/modules/Methdology/MethodologyBanner/MethodologyBanner";
import methodologyCSS from "../../styles/methodology.css";
export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: methodologyCSS,
    },
  ];
};
const Discovery = () => {
  return (
    <>
      <MethodologyBanner
        title={methodology[1].title}
        subtitle={methodology[1].subtitle}
        description={methodology[1].description}
        coverImage={methodology[1].coverImage}
      />
      <UseLazyLoad>
        <Purpose />
        <ForeFront />
        <DiscoveryContent />
        <ClientOverlook />
        <ClientProblems />
        <UiUxDesign />
        <LearntUiUx />
      </UseLazyLoad>
    </>
  );
};

export default Discovery;
