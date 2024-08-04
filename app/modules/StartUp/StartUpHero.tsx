import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef } from "react";
import NavLink from "~/components/NavLink";
import SquareWanderer from "~/components/SquareWanderer";

const StartUpHero = () => {
  const StartUpHeroBanner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = gsap.context(() => {
      gsap.to(StartUpHeroBanner.current, {
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
    <section className="start-up-hero-section">
      <div
        className="container d-flex justify-content-center"
        ref={StartUpHeroBanner}
      >
        <div className="start-up-hero-section-inner">
          <div className="start-up-hero-details">
            <h1 className="start-up-hero-heading">
              Your <span> Tech Partner </span> for Unlocking Success
            </h1>
            <p className="start-up-hero-sub-heading">
              Allow us to support you create some startup wonders
            </p>
          </div>
          <NavLink
            classes="main-btn startup-button shadow-none py-2 d-inline-flex justify-content-center align-items-center"
            href="/contact/#contact-form"
          >
            Contact Us
          </NavLink>
        </div>
        <SquareWanderer secondary />
        <SquareWanderer />
        <SquareWanderer secondary />
        <SquareWanderer />
        <SquareWanderer secondary />
      </div>
    </section>
  );
};

export default StartUpHero;
