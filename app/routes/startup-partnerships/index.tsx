import { MetaFunction, type LinksFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import UseLazyLoad from "~/helpers/useLazyLoad";
import {
  StartUpCTA,
  StartUpHero,
  StartUpProblem,
  StartUpSuccess,
  StartUpSupport,
} from "~/modules/StartUp";
import { urlFor } from "~/root";
import { sanityClient } from "~/sanity/client";
import globalCSS from "~/styles/global.css";
import startupCSS from "~/styles/startup.css";

export async function loader() {
  const [projects, seoResult] = await Promise.all([
    sanityClient.fetch(
      `*[_type == "project"]{thumbnail,review,slug,bannerTitle} | order(_updatedAt desc)`
    ),
    sanityClient.fetch(
      `*[_type == "page" && name == "Startup"]{seo} | order(_updatedAt asc)`
    ),
  ]);

  const seo =
    seoResult.length > 0
      ? seoResult[0].seo
      : {
          title: "Startup Partnerships",
          description: "Join our startup partnerships program.",
          image: null,
        };

  return { projects, seo };
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalCSS,
    },
    {
      rel: "stylesheet",
      href: startupCSS,
    },
  ];
};

export const meta: MetaFunction = ({ data }) => {
  const seo = data?.seo || {};
  const ogImageUrl = seo?.image ? urlFor(seo.image).url() : null;
  return {
    title: `${seo?.title || "Startup Partnerships"} - TechStaunch`,
    description: seo?.description || "Join our startup partnerships program.",
    "twitter:site": "@TechStaunch",
    "twitter:title": `${seo?.title || "Startup Partnerships"} - TechStaunch`,
    "twitter:description":
      seo?.description || "Join our startup partnerships program.",
    "og:title": `${seo?.title || "Startup Partnerships"} - TechStaunch`,
    "og:description":
      seo?.description || "Join our startup partnerships program.",
    "og:image": ogImageUrl,
    "og:image:height": "200",
    "og:image:width": "200",
    "og:image:alt": `${seo?.title || "Startup Partnerships"} - TechStaunch`,
    "og:type": "website",
    "og:url": `/startup-partnerships`,
    "og:site_name": "TechStaunch",
  };
};

const StartUpIndex = () => {
  const { projects } = useLoaderData();
  return (
    <main className="start-up-page">
      <StartUpHero />
      <StartUpSupport />
      <UseLazyLoad>
        <StartUpProblem />
        <StartUpSuccess projects={projects} />
        <StartUpCTA />
      </UseLazyLoad>
    </main>
  );
};

export default StartUpIndex;
