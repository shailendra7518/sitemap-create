import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef } from "react";
import ClutchContactForm from "~/components/Form/ClutchContactForm";
import { topRatedClutchBadges } from "~/constants";
import ClutchBadges from "./ClutchBadges";

const Clutch = () => {
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
    <div className="clutch-container container">
      <div>
        <h1 className="clutch-hero-title fw-bolder pb-4">
          TOP RATED ON <br />
          CLUTCH FOR <br />
          <span className="clutch-highlight">
            CUSTOM <br className="clutch-hero-title-divider" /> SOFTWARE <br />{" "}
            DEVELOPMENT
          </span>
        </h1>
        <p className="clutch-hero-description" ref={HeroSubText}>
          <span className="clutch-highlight">5/5 {""}</span>
          Star Review on {""}
          <span className="clutch-highlight">Clutch.co</span>
        </p>

        <div className="hero-button mt-5" ref={HeroButton}>
          <ClutchBadges content={topRatedClutchBadges} />
        </div>
      </div>

      <div className="w-100 clutch-contact-form-container">
        <ClutchContactForm />
      </div>
    </div>
  );
};

export default Clutch;
