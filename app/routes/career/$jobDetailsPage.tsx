import { LinksFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import JobInfo from "~/modules/Career/Job/JobInfo";
import { urlFor } from "~/root";
import { sanityClient } from "~/sanity/client";
import PageNotFound from "../$";
import blogCSS from "../../styles/blogs.css";
import careerCSS from "../../styles/career.css";
import errorCSS from "../../styles/errorPage.css";
import globalCSS from "../../styles/global.css";
import servicesCSS from "../../styles/services.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalCSS,
    },
    {
      rel: "stylesheet",
      href: blogCSS,
    },
    {
      rel: "stylesheet",
      href: careerCSS,
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
  const jobTitle = params.jobDetailsPage;
  const job = await sanityClient.fetch(
    `*[_type == "jobOpening" && slug.current=="${jobTitle}"]{
      _createdAt,
      _id,
        title,
        slug,
        image,
        description,
        skills,
        roles,
        location,
        jobType,
        ctc,
        postingDate,
        roles
    }`
  );

  if (!job.length) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  return {
    jobInformation: job[0],
  };
}

export const meta: MetaFunction = (metaData) => {
  if (!metaData.data?.jobInformation) {
    return {};
  }

  return {
    title: metaData.data?.jobInformation?.title,
    description: metaData.data?.jobInformation?.description,
    "twitter:site": "@TechStaunch",
    "twitter:title": metaData.data?.jobInformation?.title,
    "twitter:description": metaData.data?.jobInformation?.description,
    "twitter:image": urlFor(metaData.data?.jobInformation?.image).url(),
    "og:title": metaData.data?.jobInformation?.title,
    "og:description": metaData.data?.jobInformation?.description,
    "og:image": urlFor(metaData.data?.jobInformation?.image).url(),
    "og:type": `website`,
    "og:site_name": `TechStaunch`,
  };
};

const JobDetailsPage = () => {
  const jobInfo = useLoaderData();

  return <JobInfo jobInfo={jobInfo} />;
};

export default JobDetailsPage;

export function CatchBoundary() {
  return <PageNotFound />;
}

export function ErrorBoundary() {
  return <PageNotFound />;
}
