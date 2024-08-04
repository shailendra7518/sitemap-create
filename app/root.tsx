import {
  redirect,
  type LinksFunction,
  type MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import imageUrlBuilder from "@sanity/image-url";
import { createContext, useContext, useEffect, useState } from "react";
import SSRProvider from "react-bootstrap/SSRProvider";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import TagManager from "react-gtm-module";
import { config, sanityClient } from "~/sanity/client";
import globalCSS from "../app/styles/global.css";
import Layout from "./layout/Layout";
import { contactSubmission } from "./utils/contactSubmission";
import { startSitemapScript } from "script";

export async function action({ request }: any) {
  await contactSubmission(request);
  return redirect("/");
}

export async function loader({ request }: any) {
  const url = new URL(request.url);
  const baseUrl = url.origin;

  const testimonials = await sanityClient.fetch(
    `*[_type == "testimonial"] | order(_updatedAt asc)`
  );
  const env = {
    RECAPTCHA_KEY: process.env.RECAPTCHA_KEY,
  };
  return { testimonials, env, baseUrl };
}

export function urlFor(source: any) {
  return imageUrlBuilder(config).image(source);
}

export const meta: MetaFunction = () => {
  return { title: "TechStaunch" };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalCSS,
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Montserrat&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
    },
  ];
};

export interface Navigation {
  title: string;
  items: { name: string; image: any; slug: string }[];
}

export const GlobalContext = createContext({
  testimonials: [],
  navigation: [],
});

export const useGlobalContext = () => useContext(GlobalContext);

const tagManagerArgs = {
  gtmId: "GTM-TTS5R4S",
};

export default function App() {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  useEffect(() => {
    startSitemapScript();
    
  },[])

  const data = useLoaderData();
  const location = useLocation();
  const canonicalUrl = `${data.baseUrl}${location.pathname}`;
  const [isShowBanner, setIsShowBanner] = useState(true);

  return (
    <html lang="en" className={isShowBanner ? "scroll-banner-pt" : "scroll-pt"}>
      <head>
        <meta charSet="UTF-8" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#167894"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <GoogleReCaptchaProvider reCaptchaKey={data.env.RECAPTCHA_KEY}>
          <SSRProvider>
            <GlobalContext.Provider value={{ ...data }}>
              <Layout
                handleCloseBanner={() => setIsShowBanner(false)}
                isShowBanner={isShowBanner}
              >
                <Outlet />
              </Layout>
            </GlobalContext.Provider>
          </SSRProvider>
          <ScrollRestoration />
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </GoogleReCaptchaProvider>
        <a href="#scroll-to-top" className="sr-only sr-only-focusable">
          Scroll to Top
        </a>
        <Scripts />
        <script
          defer
          data-domain="techstaunch.com"
          src="https://plausible.io/js/script.js"
        ></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: ` window.$crisp=[];window.CRISP_WEBSITE_ID="48c8319b-4547-48fc-93c8-a27b30727803";
                      (function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
          }}
        ></script>
      </body>
    </html>
  );
}
