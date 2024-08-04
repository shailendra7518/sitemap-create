import { type LinksFunction, type MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import EstimationBanner from "~/components/EstimationBanner/EstimationBanner";
import TechTabs from "~/components/TechnologiesTab/TechTabs";
import { dialogConstants } from "~/constants/dialogConstants";
import { DialogBoxData, DialogConstantData } from "~/constants/types";
import UseLazyLoad from "~/helpers/useLazyLoad";
import CompanyStats from "~/modules/AboutUs/CompanyStats";
import ComboProjectTab from "~/modules/Projects/ComboProjectTab";
import { sanityClient } from "~/sanity/client";
import globalCSS from "../../styles/global.css";
import projectPageCSS from "../../styles/project-page.css";
import servicesCSS from "../../styles/services.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalCSS,
    },
    {
      rel: "stylesheet",
      href: servicesCSS,
    },
    {
      rel: "stylesheet",
      href: projectPageCSS,
    },
  ];
};
export async function loader() {
  const projects = await sanityClient.fetch(
    `*[_type == "project"] | order(_updatedAt asc)`
  );
  const sliderImages = await sanityClient.fetch(
    `*[_type == "project"]{sliderImage,slug,_updatedAt} | order(_updatedAt asc)`
  );
  return { projects: projects, sliderImages: sliderImages };
}

export const meta: MetaFunction = (data) => {
  const number = data.location.search.match(/\d+/g);
  const page = number && number[0];

  return {
    title: `${page ? `Page ${page} -` : ""} Projects`,
    description: "",
    "twitter:site": "@TechStaunch",
    "twitter:title": `${page ? `Page ${page} -` : ""} Projects`,
    "twitter:description": "",
    "og:title": `${page ? `Page ${page} -` : ""} Projects`,
    "og:description": "",
    "og:image:height": "200",
    "og:image:width": "200",
    "og:image:alt": `Projects`,
    "og:type": "website",
    "og:url": `/projects`,
    "og:site_name": "TechStaunch",
  };
};
export default function Projects() {
  const { projects } = useLoaderData();
  // const { sliderImages } = useLoaderData();
  const dialogData = projects.map((project: DialogBoxData) => ({
    name: project.name,
    title: project.dialogHeading ? project.dialogHeading : "Have an idea?",
    link: `/projects/${project.slug.current}`,
  }));

  dialogData.forEach((data: DialogConstantData) => {
    if (!dialogConstants.some((item) => item.name === data.name)) {
      dialogConstants.push(data);
    }
  });
  return (
    <section className="project-page">
      {/* Looking odd */}
      {/* <div className="container project-carousel">
        <ProjectCarousel sliderImages={sliderImages} />
      </div> */}
      <ComboProjectTab projects={projects} />
      <UseLazyLoad>
      <TechTabs active={1} />
      <CompanyStats />
      </UseLazyLoad>
      <EstimationBanner />
      <Outlet />
    </section>
  );
}
