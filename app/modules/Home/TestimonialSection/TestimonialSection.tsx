import React, { useEffect, useState } from "react";
import { Link } from "@remix-run/react";
import { getRatingPercent } from "~/components/ReviewCard/getRatingPercent";
import ClientIcons from "./ClientIcons";
import ClientIconSlider from "./ClientsIconSlider";
import ClientSlider from "./ClientSlider";

const TestimonialSection: React.FC<any> = ({ home }) => {
  const [windowWidth, setWindowWidth] = useState<any>(null);
  //Get window size for slider for moblie view
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    function reportWindowSize(): void {
      setWindowWidth(window.innerWidth);
    }
    // Trigger this function on resize
    window.addEventListener("resize", reportWindowSize);
    //  Cleanup for componentWillUnmount
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);

  return (
    <>
      <section className="testimonials">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-md-5 py-sm--5 py-md-0">
              <div className="rating-content">
                <div className="heading">
                  <h2>
                    <span className="fw-bold"> Client </span> say
                  </h2>
                </div>
                <div
                  className="Stars d-inline-block"
                  style={{
                    ["--rating-percent" as any]: getRatingPercent(5),
                    transform: "scale(1.3)",
                    marginLeft: "1rem",
                  }}
                />
                <span className="rating fw-bold">{home.avgRating}/5</span>
                <div className="rating-text py-md-3">
                  <p className="my-2" role="heading" aria-level={3}>{home.avgRatingDesc}</p>
                  <Link className="reviews" to="/testimonials">
                    More Reviews
                  </Link>
                </div>
                <div className="clutch-review pt-3">
                  <p className="m-0">Our</p>
                  <div className="clutch-logo d-flex align-items-center">
                    <img
                      className="overflow-auto"
                      src="images/clutch-logo.svg"
                      alt="clutch logo"
                      width="150"
                      height="43"
                      loading="lazy"
                    />
                    <span className="ms-3">
                      <a
                        target="blank"
                        className="reviews"
                        href="https://clutch.co/profile/techstaunch?utm_source=widget&utm_medium=1&utm_campaign=widget&utm_content=stars#reviews"
                      >
                        Reviews
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <ClientSlider />
          </div>
        </div>
      </section>
      <article className="clients">
        <div className="heading container d-flex justify-content-center mb-sm-5 py-lg-4 py-xl-3">
          <h2>
            <span className="fw-bold"> Our </span> Clients
          </h2>
        </div>
        {windowWidth <= 576 ? (
          <ClientIconSlider />
        ) : (
          <ClientIcons clients={home} />
        )}
      </article>
    </>
  );
};

export default TestimonialSection;
