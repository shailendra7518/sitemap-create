import { MetaFunction, type LinksFunction } from "@remix-run/node";
import NormalBanner from "~/components/NormalBanner";
import { testimonialBanner } from "~/constants/testimonialBanner";
import TechStaunchReviews from "~/modules/Testimonials/TechStaunchReviews";
import { urlFor } from "~/root";
import { sanityClient } from "~/sanity/client";
import methodologyCSS from "../../styles/methodology.css";
import testimonialsCSS from "../../styles/testimonials.css";

export async function loader() {
  const [seo] = await Promise.all([
    sanityClient.fetch(
      `*[_type == "page" && name == "Testimonial"]{seo} | order(_updatedAt asc)`
    ),
  ]);

  return {
    seo: seo[0].seo,
  };
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: methodologyCSS,
    },
    {
      rel: "stylesheet",
      href: testimonialsCSS,
    },
  ];
};

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
    "og:url": `/about`,
    "og:site_name": "TechStaunch",
  };
};
const Testimonials = () => {
  return (
    <>
      <NormalBanner data={testimonialBanner} />
      <TechStaunchReviews />
    </>
  );
};

export default Testimonials;
