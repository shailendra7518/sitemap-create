import type { MetaFunction } from "@remix-run/node";
import { type LinksFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Blog from "~/modules/Blogs/Blog";
import { urlFor } from "~/root";
import { sanityClient } from "~/sanity/client";
import PageNotFound from "../$";
import blogCSS from "../../styles/blogs.css";
import errorCSS from "../../styles/errorPage.css";
import globalCSS from "../../styles/global.css";

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
      href: errorCSS,
    },
  ];
};
export async function loader(context: any) {
  const { blog } = context.params;
  const env = {
    DISQUS_SHORTNAME: process.env.DISQUS_SHORTNAME,
  };
  const [blogs] = await Promise.all([
    sanityClient.fetch(
      `*[_type == "blog" && type == "${blog}" || slug.current == "${blog}"] | order(_updatedAt asc)`
    ),
  ]);
  const [categoryBlogs] = await Promise.all([
    sanityClient.fetch(
      `*[_type == "blog" && ("${blog}" in tags[] || type == "${blog}")] | order(_updatedAt asc)`
    ),
  ]);
  if (!blogs.length) {
    throw new Response(null, {
      status: 404,
      statusText: "Page Not Found!",
    });
  }

  return { blogs: blogs[0], blog, categoryBlogs, env };
}

export const meta: MetaFunction = (metaData) => {
  if (!metaData.data?.blogs?.meta) {
    return {};
  }

  let blogActualImage = urlFor(
    metaData.data?.blogs?.meta?.image
      ? metaData.data?.blogs?.meta?.image
      : metaData.data?.blogs?.image
  ).url();

  return {
    title: metaData.data?.blogs?.meta?.title,
    description: metaData.data?.blogs?.meta?.description,
    "twitter:site": "@TechStaunch",
    "twitter:title": metaData.data?.blogs?.meta?.title,
    "twitter:description": metaData.data?.blogs?.meta?.description,
    "twitter:image": blogActualImage,
    "og:title": metaData.data?.blogs?.meta?.title,
    "og:description": metaData.data?.blogs?.meta?.description,
    "og:image": blogActualImage,
    "og:type": `website`,
    "og:site_name": `TechStaunch`,
  };
};

const ProjectDetail = () => {
  const { blogs, categoryBlogs, blog } = useLoaderData();
  let blogActualImage = urlFor(
    blogs?.meta?.image ? blogs?.meta?.image : blogs?.image
  ).url();

  const jsonString = {
    "@context": "https://schema.org/",
    "@type": "BlogPosting",
    headline: blogs?.meta?.title,
    name: blogs?.name,
    description: blogs?.description,
    datePublished: blogs?.date,
    dateModified: blogs?._updatedAt,
    image: {
      "@type": "ImageObject",
      "@id": blogActualImage,
      url: blogActualImage,
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://techstaunch.com/",
      name: "Techstaunch",
      logo: {
        "@type": "ImageObject",
        "@id": "https://techstaunch.com/images/techStaunch-footer-logo.svg",
        url: "https://techstaunch.com/images/techStaunch-footer-logo.svg",
      },
    },
    url: blogs?.slug?.current,
    isPartOf: {
      "@type": "Blog",
      "@id": "https://techstaunch.com/blogs",
      name: "Techstaunch Blog",
      publisher: {
        "@type": "Organization",
        "@id": "https://techstaunch.com/",
        name: "Techstaunch",
      },
    },
    about: [
      {
        "@type": blogs?.type,
        name: blogs?.type,
      },
    ],
  };

  return (
    <>
      <Blog blogData={blogs} categoryBlogs={categoryBlogs} blog={blog} />
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `${JSON.stringify(jsonString)}`,
        }}
      ></script>
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
