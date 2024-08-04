import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
gsap.registerPlugin(ScrollTrigger);

const AlternateContentCard: React.FC<{ dataItem: any }> = ({ dataItem }) => {
  const text = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const alternateCardAnimation = gsap.context(() => {
      gsap.to(text.current, {
        scrollTrigger: {
          trigger: text.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
        duration: 1,
        x: -50,
        opacity: 1,
        ease: "Power3.easeOut",
      });
    });

    return () => {
      alternateCardAnimation.revert();
    };
  }, []);

  return (
    <div
      className="services-content mb-3 col-xl-6 order-2 order-lg-2 mt-0"
      ref={text}
    >
      <h2 className="services-heading">
        {dataItem.title} <br /> {dataItem.subtitle}
      </h2>
      <p className="mb-lg-4 services-details">{dataItem.description}</p>
    </div>
  );
};

export default AlternateContentCard;
