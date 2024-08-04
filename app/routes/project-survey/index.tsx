import { type LinksFunction, type MetaFunction } from "@remix-run/node";
import { projectSurveyBanner } from "~/constants/projectSurveyBanner";
import ProjectSurveyBanner from "~/modules/ProjectSurvey/ProjectSurveyBanner";
import ProjectSurveyForm from "~/modules/ProjectSurvey/ProjectSurveyForm";
import { urlFor } from "~/root";
import { sanityClient } from "~/sanity/client";
import globalCSS from "../../styles/global.css";
import projectSurveyCSS from "../../styles/project-survey.css";

export async function loader() {
  const [seo] = await Promise.all([
    sanityClient.fetch(
      `*[_type == "page" && name == "ProjectSurvey"]{seo} | order(_updatedAt asc)`
    ),
  ]);

  return {
    seo: seo[0].seo,
  };
}

export const meta: MetaFunction = ({ data: { seo } }) => {
  return {
    title: `${seo?.title} - TechStaunch`,
    description: seo?.description,
    "twitter:site": "@TechStaunch",
    "twitter:title": `${seo?.title} - TechStaunch`,
    "twitter:description": seo?.description,
    "og:title": `${seo?.title} - TechStaunch`,
    "og:description": seo?.description,
    "og:image": seo?.image && urlFor(seo?.image).url(),
    "og:image:height": "200",
    "og:image:width": "200",
    "og:image:alt": `${seo?.title} - TechStaunch`,
    "og:type": "website",
    "og:url": `/project-survey`,
    "og:site_name": "TechStaunch",
  };
};
export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalCSS,
    },
    {
      rel: "stylesheet",
      href: projectSurveyCSS,
    },
  ];
};
const ProjectSurvey = () => {
  return (
    <>
      <ProjectSurveyBanner data={projectSurveyBanner} />
      <ProjectSurveyForm />
    </>
  );
};

export default ProjectSurvey;
