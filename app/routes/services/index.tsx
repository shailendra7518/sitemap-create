import { type LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
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
  ];
};
const Services = () => {
  return (
    <div>
      <h1>index</h1>
      <Outlet />
    </div>
  );
};

export default Services;
