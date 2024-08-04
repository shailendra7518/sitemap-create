import { type LinksFunction } from "@remix-run/node";
import { methodology } from "~/constants/methology";
import UseLazyLoad from "~/helpers/useLazyLoad";
import AppServices from "~/modules/Methdology/AppServices/AppServices";
import MethodologyBanner from "~/modules/Methdology/MethodologyBanner/MethodologyBanner";
import MethodologyContent from "~/modules/Methdology/MethodologyContent";
import OurMethodology from "~/modules/Methdology/OurMethodology/OurMethodology";
import globalCSS from "../../styles/global.css";
import methodologyCSS from "../../styles/methodology.css";
export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalCSS,
    },
    {
      rel: "stylesheet",
      href: methodologyCSS,
    },
  ];
};
const index = () => {
  return (
    <>
      <MethodologyBanner
        title={methodology[0].title}
        description={methodology[0].description}
        coverImage={methodology[0].coverImage}
      />
      <UseLazyLoad>
        <OurMethodology />
        <MethodologyContent />
        <AppServices />
      </UseLazyLoad>
    </>
  );
};

export default index;
