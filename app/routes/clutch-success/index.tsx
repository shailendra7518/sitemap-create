import { type LinksFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import UseLazyLoad from "~/helpers/useLazyLoad";
import CompanyStats from "~/modules/AboutUs/CompanyStats";
import {
  Clutch,
  ClutchEstimationBanner,
  ClutchFooterContactForm,
  ClutchReview,
  ClutchServices,
  ClutchWidget,
  TailoredTechnologyRoadmap,
} from "~/modules/Clutch";
import ClutchProjects from "~/modules/Clutch/ClutchProjects";
import TopDevelopmentClutchBadges from "~/modules/Clutch/TopDevelopmentClutchBadges";
import { sanityClient } from "~/sanity/client";
import aboutCSS from "~/styles/about.css";
import globalCSS from "~/styles/global.css";
import homeCSS from "~/styles/home.css";
import servicesCSS from "~/styles/services.css";

export async function loader() {
  const [projects, services] = await Promise.all([
    sanityClient.fetch(
      `*[_type == "project"]{thumbnail,name,subTitle,modalpoints,bannerImage,slug,_updatedAt} | order(_updatedAt desc) [0..2]`
    ),
    sanityClient.fetch(
      `*[_type == "service" ]{bannerTitle, carddescription, serviceCardImage, slug, order} | order(order asc)`
    ),
  ]);

  return { projects, services };
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalCSS,
    },
    {
      rel: "stylesheet",
      href: aboutCSS,
    },
    {
      rel: "stylesheet",
      href: servicesCSS,
    },
    {
      rel: "stylesheet",
      href: homeCSS,
    },
  ];
};

const ClutchIndex = () => {
  const data = useLoaderData();

  return (
    <>
      <Clutch />
      <CompanyStats />
      <ClutchReview />
      <ClutchWidget />
      <ClutchEstimationBanner />
      <UseLazyLoad>
      <TailoredTechnologyRoadmap />
      <ClutchProjects projects={data.projects} />
      <ClutchServices services={data.services} />
      <TopDevelopmentClutchBadges />
      <ClutchFooterContactForm />
      </UseLazyLoad>
    </>
  );
};

export default ClutchIndex;
