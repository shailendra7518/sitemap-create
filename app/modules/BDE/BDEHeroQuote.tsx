import { gsap } from "gsap/dist/gsap";
import React, { useEffect, useRef } from "react";
import NavLink from "~/components/NavLink";
import SquareWanderer from "~/components/SquareWanderer";
import { BDEHeroCard } from "~/constants/bdeHeroCard";
import { BDEProfileBadges } from "~/constants/bdeProfileBadges";
import BDEHeroBadges from "./BDEHeroBadges";

const BDEHeroQuote: React.FC = () => {
  const BDEHeroBanner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = gsap.context(() => {
      gsap.to(BDEHeroBanner.current, {
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
    <div
      className="bde-banner d-flex flex-column align-items-center"
      ref={BDEHeroBanner}
    >
      <div>
        <div className="hero-title">
          <h1 className="text-center">
            <span> Strategic </span> Partnerships
          </h1>
        </div>
        <p className="bde-hero-description text-center px-2">
          Build your Tech Product with Techstaunch’s custom software development
          services.
          <br />
          Our dedicated team collaborates with you to create efficient software
          tailored to your business needs.
        </p>
      </div>
      <SquareWanderer secondary />
      <SquareWanderer />
      <SquareWanderer secondary />
      <SquareWanderer />
      <div className="bde-hero-button">
        <NavLink
          classes="main-btn shadow-none d-inline-flex justify-content-center align-items-center"
          href="/contact"
        >
          Schedule a Meeting
        </NavLink>
      </div>
      <BDEHeroBadges content={BDEProfileBadges} />
      <div className="bde-hero-cards">
        {BDEHeroCard.map((data, index) => (
          <div className="card-container" key={index}>
            <img src={data.logo} alt={data.name} />
            <p className="card-title m-0">{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BDEHeroQuote;
