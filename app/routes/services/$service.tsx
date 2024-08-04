import { type LinksFunction, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import TechTabs from "~/components/TechnologiesTab/TechTabs";
import { dialogConstants } from "~/constants/dialogConstants";
import { DialogBoxData, DialogConstantData } from "~/constants/types";
import UseLazyLoad from "~/helpers/useLazyLoad";
import ServicesBanner from "~/modules/Services/ServiceBanner/ServicesBanner";
import ServicesInfo from "~/modules/Services/ServiceInfo/ServicesInfo";
import ServiceWrapper from "~/modules/Services/ServiceWrapper/ServiceWrapper";
import { urlFor } from "~/root";
import { sanityClient } from "~/sanity/client";
import PageNotFound from "../$";
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
      href: servicesCSS,
    },
    {
      rel: "stylesheet",
      href: errorCSS,
    },
  ];
};
export async function loader({ params }: any) {
  const { service } = params;
  const services = await sanityClient.fetch(
    `*[_type == "service" && slug.current == "${service}" ] | order(_updatedAt asc)`
  );
  const projects = await sanityClient.fetch(
    `*[_type == "project"]{_createdAt,thumbnail,name,subTitle,slug,_updatedAt} | order(_updatedAt asc) [0..5]`
  );
  if (services.length === 0) {
    throw new Response(null, {
      status: 404,
      statusText: "Page Not Found!",
    });
  }
  return { service: services[0], projects };
}

export const meta: MetaFunction = (args) => {
  if (args.data == null) {
    return {};
  }
  const service = args.data.service;
  return {
    title: `${service.seo.title} - TechStaunch`,
    description: service.seo.description,
    "twitter:site": "@TechStaunch",
    "twitter:title": `${service.seo.title} - TechStaunch`,
    "twitter:description": service.seo.description,
    "og:title": `${service.seo.title} - TechStaunch`,
    "og:description": service.seo.description,
    "og:image": urlFor(service.seo.image).url(),
    "og:image:height": "200",
    "og:image:width": "200",
    "og:image:alt": `${service.seo.title} - TechStaunch`,
    "og:type": "website",
    "og:url": `services/${service.seo.title}`,
    "og:site_name": "TechStaunch",
  };
};

const Service = () => {
  const { service } = useLoaderData();
  const { projects } = useLoaderData();
  const dialogData = [service].map((service: DialogBoxData) => ({
    name: service.name,
    title: service.dialogHeading ? service.dialogHeading : "Looking for services?",
    link: `/services/${service.slug.current}`,
  }));

  dialogData.forEach((data: DialogConstantData) => {
    if (!dialogConstants.some((item) => item.name === data.name)) {
      dialogConstants.push(data);
    }
  });
  return (
    <>
      <ServiceWrapper projects={projects}>
        <ServicesBanner
          title={service.bannerTitle}
          subtitle={service.bannerSubtitle}
          coverImage={service.bannerImage}
        />
        <UseLazyLoad>
        <ServicesInfo infoList={service.servicesDescriptions} />
        <TechTabs active={1} />
        </UseLazyLoad>
      </ServiceWrapper>
    </>
  );
};

export default Service;

export function CatchBoundary() {
  return <PageNotFound />;
}

export function ErrorBoundary() {
  return <PageNotFound />;
}
