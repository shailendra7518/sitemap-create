import { type LinksFunction, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import FooterContactForm from "~/components/Form/FooterForm";
import UseLazyLoad from "~/helpers/useLazyLoad";
import ContactBanner from "~/modules/Contact/ContactBanner";
import ContactInfo from "~/modules/Contact/ContactInfo";
import { urlFor } from "~/root";
import { sanityClient } from "~/sanity/client";
import contactCSS from "~/styles/contact.css";
import globalCSS from "~/styles/global.css";

export async function loader() {
  const [contact, seo] = await Promise.all([
    sanityClient.fetch(`*[_type == "contact"] | order(_updatedAt asc)`),
    sanityClient.fetch(
      `*[_type == "page" && name == "Contact"]{seo} | order(_updatedAt asc)`
    ),
  ]);
  return { contact: contact[0], seo: seo[0].seo };
}
export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalCSS,
    },
    {
      rel: "stylesheet",
      href: contactCSS,
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
const Contact = () => {
  const { contact } = useLoaderData();
  return (
    <>
      <ContactBanner contact={contact} />
      <div className="contact-page-form">
        <FooterContactForm />
      </div>
      <UseLazyLoad>
        <ContactInfo />
      </UseLazyLoad>
    </>
  );
};

export default Contact;
