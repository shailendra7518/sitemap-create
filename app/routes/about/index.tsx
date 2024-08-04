import { type LinksFunction, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import FooterContactForm from "~/components/Form/FooterForm";
import TestimonialsSlider from "~/components/Slider/TestimonialsSlider";
import UseLazyLoad from "~/helpers/useLazyLoad";
import CompanyStats from "~/modules/AboutUs/CompanyStats";
import HowWeWorkAbout from "~/modules/AboutUs/HowWeWorkAbout";
import OurGeography from "~/modules/AboutUs/OurGeography";
import WhoWeAre from "~/modules/AboutUs/WhoWeAre";
import WhyUs from "~/modules/AboutUs/WhyUs";
import { urlFor } from "~/root";
import { sanityClient } from "~/sanity/client";
import aboutCSS from "~/styles/about.css";
import globalCSS from "~/styles/global.css";

export async function loader() {
  const [about, seo] = await Promise.all([
    sanityClient.fetch(`*[_type == "about"] | order(_updatedAt asc)`),
    sanityClient.fetch(
      `*[_type == "page" && name == "About"]{seo} | order(_updatedAt asc)`
    ),
  ]);
  return { about: about[0], seo: seo[0].seo };
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
    "og:url": `/about`,
    "og:site_name": "TechStaunch",
  };
};
const AboutIndex = () => {
  const { about } = useLoaderData();
  return (
    <>
      <WhoWeAre about={about} />
      <WhyUs />
      <UseLazyLoad>
        <HowWeWorkAbout />
        <OurGeography />
        <CompanyStats />
        <FooterContactForm />
        {/* Commented as UI is breaking for images */}
        <TestimonialsSlider />
      </UseLazyLoad>
    </>
  );
};

export default AboutIndex;
