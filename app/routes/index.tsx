import { type LinksFunction, type MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import defalutTimeLineStyle from "react-vertical-timeline-component/style.min.css";
import FooterContactForm from "~/components/Form/FooterForm";
import SliderArrow from "~/components/Icons/Slider/SliderArrow";
import UseLazyLoad from "~/helpers/useLazyLoad";
import CompanyStats from "~/modules/AboutUs/CompanyStats";
import { Hero, HowWeWork, Projects, Services, WhyUs } from "~/modules/Home";
import BlogSection from "~/modules/Home/BlogSection/Blog";
import TestimonialSection from "~/modules/Home/TestimonialSection/TestimonialSection";
import { urlFor } from "~/root";
import { sanityClient } from "~/sanity/client";
import globalCSS from "../styles/global.css";
import homeCSS from "../styles/home.css";

export async function loader() {
  const [projects, blogs, services, home, seo] = await Promise.all([
    sanityClient.fetch(
      `*[_type == "project"]{thumbnail,name,subTitle,modalpoints,bannerImage,slug,_updatedAt} | order(_updatedAt desc) [0..5]`
    ),
    sanityClient.fetch(
      `*[_type == "blog"] {name, image, link, slug, _createdAt, type, date} | order(_createdAt desc) [0..2]`
    ),
    sanityClient.fetch(
      `*[_type == "service" ]{bannerTitle, carddescription, serviceCardImage, slug, order} | order(order asc)`
    ),
    sanityClient.fetch(`*[_type == "home" ]`),
    sanityClient.fetch(
      `*[_type == "page" && name == "Home"]{seo} | order(_updatedAt asc)`
    ),
  ]);

  return { projects, blogs, services, home: home[0], seo: seo[0].seo };
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: defalutTimeLineStyle,
    },
    {
      rel: "stylesheet",
      href: globalCSS,
    },
    {
      rel: "stylesheet",
      href: homeCSS,
    },
  ];
};

export const meta: MetaFunction = ({ data: { seo } }) => {
  return {
    title: seo?.title,
    description: seo?.description,
    "twitter:site": "@TechStaunch",
    "twitter:title": seo?.title,
    "twitter:description": seo?.description,
    "twitter:image": urlFor(seo?.image).url(),
    "og:title": seo?.title,
    "og:description": seo?.description,
    "og:image": urlFor(seo?.image).url(),
    "og:image:alt": seo?.title,
    "og:type": "website",
    "og:site_name": "TechStaunch",
  };
};

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  rows: 2,
  nextArrow: (
    <SliderArrow dir="next" externalClass="project-slider-arrows next" />
  ),
  prevArrow: (
    <SliderArrow dir="prev" externalClass="project-slider-arrows prev" />
  ),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        rows: 1,
        infinite: true,
        arrow: true,
      },
    },
  ],
};
export default function Index() {
  const data = useLoaderData();

  return (
    <>
      <Hero />
      <UseLazyLoad>
        <CompanyStats />
        <Services services={data.services} />
        <WhyUs />
        <HowWeWork />
        <Projects projects={data.projects} settings={settings} isWidget />
        <TestimonialSection home={data.home} />
        <BlogSection blogs={data.blogs} />
        <FooterContactForm />
      </UseLazyLoad>
      <Outlet />;
    </>
  );
}
