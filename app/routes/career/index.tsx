import { type LinksFunction, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Hiring from "~/modules/Career/Hiring";
import PerksOfJoining from "~/modules/Career/PerksOfJoining";
import { urlFor } from "~/root";
import { sanityClient } from "~/sanity/client";
import careerCSS from "../../styles/career.css";
import globalCSS from "../../styles/global.css";

export async function loader() {
  const [seo, careerDetail] = await Promise.all([
    sanityClient.fetch(
      `*[_type == "page" && name == "Career"]{seo} | order(_updatedAt asc)`
    ),
    sanityClient.fetch(`*[_type=="jobOpening"]{
      _createdAt,
      _id,
      shortDescription,
        title,
        slug,
        vacancy,
        image
    }`),
  ]);

  return { seo: seo[0].seo, careerDetail: careerDetail };
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalCSS,
    },
    {
      rel: "stylesheet",
      href: careerCSS,
    },
  ];
};

export const meta: MetaFunction = ({ data: { seo } }) => {
  return {
    title: `${seo.title} - TechStaunch`,
    description: seo.description,
    "twitter:site": "@TechStaunch",
    "twitter:title": `${seo.title} - TechStaunch`,
    "twitter:description": seo.description,
    "og:title": `${seo.title} - TechStaunch`,
    "og:description": seo.description,
    "og:image": urlFor(seo.image).url(),
    "og:image:height": "200",
    "og:image:width": "200",
    "og:image:alt": `${seo.title} - TechStaunch`,
    "og:type": "website",
    "og:url": `/career`,
    "og:site_name": "TechStaunch",
  };
};

const Career = () => {
  const { careerDetail } = useLoaderData();
  return (
    <>
      <Hiring vacancy={careerDetail} />
      <PerksOfJoining />
    </>
  );
};

export default Career;
