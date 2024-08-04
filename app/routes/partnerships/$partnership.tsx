import { type LinksFunction, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import UseLazyLoad from "~/helpers/useLazyLoad";
import {
  BDEConsultant,
  BDEHero,
  BDETestimonials,
  BDEWhyChooseUs,
} from "~/modules/BDE";
import BlogSection from "~/modules/Home/BlogSection/Blog";
import { urlFor } from "~/root";
import { sanityClient } from "~/sanity/client";
import globalCSS from "~/styles/global.css";
import homeCSS from "~/styles/home.css";
import partnershipsCSS from "~/styles/partnerships.css";

export async function loader({ params }: any) {
  const consultant = params.partnership;

  const [consultants, projects, blogs, seo] = await Promise.all([
    sanityClient.fetch(
      `*[_type == "consultant" && slug.current == "${consultant}"] | order(_updatedAt asc)`
    ),
    sanityClient.fetch(
      `*[_type == "consultant" && slug.current == "${consultant}"] {"projects": *[_type == "project" && _id in ^.projects[]._ref]}`
    ),
    sanityClient.fetch(
      `*[_type == "consultant" && slug.current == "${consultant}"] {"blogs": *[_type == "blog" && _id in ^.blogs[]._ref]}`
    ),
    sanityClient.fetch(
      `*[_type == "consultant" && slug.current == "${consultant}"]{seo} | order(_updatedAt asc)`
    ),
  ]);

  if (!consultants.length) {
    throw new Response(null, {
      status: 404,
      statusText: "Page Not Found!",
    });
  }
  return {
    consultants: consultants[0],
    projects: projects[0].projects,
    blogs: blogs[0],
    seo: seo[0].seo,
  };
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalCSS,
    },
    {
      rel: "stylesheet",
      href: partnershipsCSS,
    },
    {
      rel: "stylesheet",
      href: homeCSS,
    },
  ];
};
export const meta: MetaFunction = ({ data: { seo } }) => {
  const ogImageUrl = seo?.image && urlFor(seo.image).url();
  return {
    title: `${seo?.title} - TechStaunch`,
    description: seo?.description,
    "twitter:site": "@TechStaunch",
    "twitter:title": `${seo?.title} - TechStaunch`,
    "twitter:description": seo?.description,
    "og:title": `${seo?.title} - TechStaunch`,
    "og:description": seo?.description,
    "og:image": ogImageUrl,
    "og:image:height": "200",
    "og:image:width": "200",
    "og:image:alt": `${seo?.title} - TechStaunch`,
    "og:type": "website",
    "og:url": `/partnerships`,
    "og:site_name": "TechStaunch",
  };
};
const PartnerShipsIndex = () => {
  const { consultants, projects, blogs } = useLoaderData();

  return (
    <>
      <BDEHero />
      <UseLazyLoad>
        <BDETestimonials bdeTestimonialData={projects} />
        <BDEWhyChooseUs />
        <BDEConsultant consultant={consultants} />
        <BlogSection blogs={blogs.blogs} />
      </UseLazyLoad>
    </>
  );
};

export default PartnerShipsIndex;
