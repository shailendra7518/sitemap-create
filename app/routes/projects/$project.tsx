import { type LinksFunction, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import EstimationBanner from "~/components/EstimationBanner/EstimationBanner";
import TechTabs from "~/components/TechnologiesTab/TechTabs";
import AboutProject from "~/modules/Projects/ProjectDetailPage/AboutProject";
import ProjectDetailBanner from "~/modules/Projects/ProjectDetailPage/ProjectDetailBanner";
import ProjectFeature from "~/modules/Projects/ProjectDetailPage/ProjectFeature";
import { urlFor } from "~/root";
import { sanityClient } from "~/sanity/client";
import PageNotFound from "../$";
import errorCSS from "../../styles/errorPage.css";
import projectPageCSS from "../../styles/project-page.css";
import servicesCSS from "../../styles/services.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: projectPageCSS,
    },
    {
      rel: "stylesheet",
      href: servicesCSS,
    },
    {
      rel: "stylesheet",
      href: errorCSS,
    },
  ];
};
export async function loader({ params }: any) {
  const { project } = params;
  const projects = await sanityClient.fetch(
    `*[_type == "project" && slug.current == "${project}" ] | order(_updatedAt asc)`
  );
  if (projects.length === 0) {
    throw new Response(null, {
      status: 404,
      statusText: "Page Not Found!",
    });
  }
  return { projects: projects[0], project };
}

export const meta: MetaFunction = (args) => {
  if (args.data == null) {
    return {};
  }
  const projects = args.data.projects;
  return {
    title: `${projects.seo.title} - TechStaunch`,
    description: projects.seo.description,
    "twitter:site": "@TechStaunch",
    "twitter:title": `${projects.seo.title} - TechStaunch`,
    "twitter:description": projects.seo.description,
    "og:title": `${projects.seo.title} - TechStaunch`,
    "og:description": projects.seo.description,
    "og:image": urlFor(projects.seo.image).url(),
    "og:image:height": "200",
    "og:image:width": "200",
    "og:image:alt": `${projects.seo.title} - TechStaunch`,
    "og:type": "website",
    "og:url": `projects/${projects.seo.title}`,
    "og:site_name": "TechStaunch",
  };
};

const ProjectDetail = () => {
  const { projects } = useLoaderData();
  return (
    <>
      <ProjectDetailBanner project={projects} />
      <AboutProject about={projects} />
      <ProjectFeature features={projects} />
      <TechTabs active={1} />
      <EstimationBanner />
    </>
  );
};

export default ProjectDetail;

export function CatchBoundary() {
  return <PageNotFound />;
}

export function ErrorBoundary() {
  return <PageNotFound />;
}
