import React, { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { urlFor } from "~/root";

const ServicesBanner: React.FC<{
  title: string;
  subtitle: string;
  coverImage: string;
}> = ({ title, subtitle, coverImage }) => {
  const serviceBanner = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const serviceBannerAnimation = gsap.context(() => {
      gsap.timeline().to(".squares", {
        x: "random(-700, 500)",
        y: "random(-100, 1000)",
        duration: 3,
        ease: "none",
        repeat: -1,
        repeatRefresh: false,
      });

      gsap.fromTo(
        serviceBanner.current,
        {
          x: -150,
          y: 50,
          opacity: 0,
          ease: "ease-in",
        },
        {
          duration: 3,
          x: 0,
          y: 0,
          opacity: 1,
        }
      );

      gsap.fromTo(
        ".services-banner-text",
        {
          opacity: 0,
          y: 60,
          delay: 1,
          ease: "sine.in",
        },
        {
          duration: 1,
          opacity: 1,
          y: 0,
        }
      );
    });

    return () => {
      serviceBannerAnimation.revert();
    };
  }, [title]);

  return (
    <section className="web-services-banner">
      <div className="container">
        <div className="row align-items-md-center pt-5 position-relative">
          <div className="col-xl-5 col-lg-5 col-md-12 services-banner-text position-lg-absolute ms-auto  pt-lg-5 mb-5 order-lg-1 order-2 mt-5 mt-lg-0">
            <h1 className="services-banner-title fw-bolder mb-lg-3">{title}</h1>
            <p className="services-banner-detail mb-4 ">{subtitle}</p>

            <div className="squares-second p-1 p-md-2 p-lg-3 d-none d-lg-block"></div>
          </div>
          <div className="col-xl-7  col-lg-7 col-md-12  overflow-visible services-banner-image order-lg-2 order-1 ">
            <img
              className="img-fluid"
              src={urlFor(coverImage).url()}
              alt="web-services"
              ref={serviceBanner}
            />
            <div className="squares p-1 p-md-2 p-lg-3 d-none d-md-block"></div>
            <div className="squares p-5 p-md-2 p-lg-3 d-none d-xl-block mt-5 ms-5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;
