import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import { urlFor } from "~/root";

gsap.registerPlugin(ScrollTrigger);
const AlternateSideServices: React.FC<{
  data: any[];
}> = ({ data }) => {
  const sideService = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const alternateSideContext = gsap.context(() => {
      const sideCard = gsap.utils.selector(sideService);

      sideCard(".services-content").map((element, index) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, x: 100 },
          {
            duration: 1,
            autoAlpha: 1,
            x: 0,
            ease: "none",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: element,
              start: "top center+=300",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      sideCard(".service-info-image").map((element, index) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, x: -100 },
          {
            duration: 1,
            autoAlpha: 1,
            x: 0,
            ease: "none",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: element,
              start: "top center+=300",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => {
      alternateSideContext.revert();
    };
  }, []);

  return (
    <div ref={sideService}>
      {data.map((dataItem, index) => {
        return (
          <div
            id={dataItem?.id}
            className={
              index % 2 === 0
                ? "row align-items-center justify-content-between service-info"
                : "row align-items-center justify-content-between flex-row-reverse service-info"
            }
            key={index}
          >
            {" "}
            <div className="col-xl-5 col-md-6 order-1 order-lg-1 service-info-image">
              <div className="services-image my-md-5 ms-md-5 me-md-5 d-flex justify-content-center">
                <img
                  className="img-fluid"
                  src={urlFor(dataItem?.infoImage).url()}
                  alt={dataItem.infoTitle}
                />
              </div>
            </div>
            <div className="col-xl-7 col-md-6 services-content mb-3 order-2 order-lg-2 mt-0">
              <h2 className="services-heading mt-5">{dataItem.infoTitle}</h2>
              <p className="mb-lg-4 services-details">
                {dataItem.infoDesciption}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AlternateSideServices;
