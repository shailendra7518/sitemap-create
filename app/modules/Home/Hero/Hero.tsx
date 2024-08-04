import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef } from "react";
import SquareWanderer from "~/components/SquareWanderer";
import TechStaunchHeroImage from "./HeroImage.svg";
import HeroQuote from "./HeroQuote";

const Hero = () => {
  const HeroBanner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = gsap.context(() => {
      gsap.to(HeroBanner.current, {
        duration: 0.5,
        delay: 0,
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        ease: "Power3.easeOut",
      });
    });

    return () => {
      hero.revert();
    };
  }, []);
  return (
    <section className="hero-section h-100 position-relative">
      <div className="container">
        <div className="row align-items-md-start pt-lg-5 position-relative">
          <div
            className="col-xl-7 col-sm-12 col-lg-7 col-md-12 overflow-visible banner-image order-1 order-lg-0"
            ref={HeroBanner}
          >
            <object
              type="image/svg+xml"
              data={TechStaunchHeroImage}
              width="130%"
              className="hero-image-svg"
              aria-label="TechStaunch Hero Image"
            >
              TechStaunch Hero Image
            </object>
            <SquareWanderer />
          </div>
          <HeroQuote />
        </div>
      </div>
    </section>
  );
};

export default Hero;
