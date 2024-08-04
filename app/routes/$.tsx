import { type LinksFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import { RegularButton } from "~/components/Buttons";
import errorCSS from "../styles/errorPage.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: errorCSS,
    },
  ];
};

const PageNotFound = () => {
  const navigatePage = useNavigate();

  return (
    <div className="error-container">
      <div className="error-head">
        <div className="error-head-404">
          <h1>404</h1>
        </div>
        <h2>We are sorry, Page not found!</h2>
        <p>
          The page you are looking for might have been removed or had its name
          changed or is temporarily unavailable.
        </p>
        <RegularButton onClick={() => navigatePage("/")}>
          Back to Home
        </RegularButton>
      </div>
    </div>
  );
};

export default PageNotFound;
