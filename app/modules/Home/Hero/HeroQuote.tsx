import { gsap } from "gsap/dist/gsap";
import React, { useEffect, useRef } from "react";
import { GoArrowRight } from "react-icons/go";
import NavLink from "~/components/NavLink";
import { profileBadges } from "../../../constants/profileBadges";
import ProfileBadges from "./ProfileBadges";

const HeroQuote: React.FC = () => {
  const HeroSubText = useRef<HTMLParagraphElement>(null);
  const HeroButton = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroQuote = gsap.context(() => {
      gsap.to(HeroSubText.current, {
        duration: 2,
        delay: 0.5,
        y: -20,
        opacity: 1,
        ease: "Power3.easeOut",
      });

      gsap.to(HeroButton.current, {
        duration: 2,
        delay: 0.5,
        x: 0,
        opacity: 1,
        ease: "Power3.easeOut",
      });
    });

    return () => {
      heroQuote.revert();
    };
  }, []);
  return (
    <div className="col-xl-5 col-lg-5 col-md-12 banner-text position-lg-absolute ms-auto my-lg-5 pt-lg-5 mb-5 mt-5">
      <div className="hero-title pt-lg-5 pb-4">
        <h1 className="fw-bolder m-0">
          PASSIONATE TO
          <br />
          CODE <span>YOUR SUCCESS</span>
        </h1>
      </div>
      <p className="mt-0 hero-description pt-2 pe-0 pe-md-5" ref={HeroSubText}>
        Empowering Your{" "}
        <span className="text-theme" role="heading" aria-level={2}>
          Reach in a Connected World{" "}
        </span>
        through Innovative Digital Solutions
      </p>

      <div className="hero-button" ref={HeroButton}>
        <NavLink
          classes="main-btn shadow-none py-2 d-inline-flex justify-content-center align-items-center"
          href="/#contact-form"
        >
          Get our Expert Guidance Now!&nbsp;&nbsp;
          <GoArrowRight className="right-arrow" />
        </NavLink>

        <ProfileBadges content={profileBadges} />
      </div>
    </div>
  );
};

export default HeroQuote;
