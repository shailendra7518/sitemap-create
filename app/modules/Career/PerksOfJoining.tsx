import { Sine } from "gsap";
import { gsap } from "gsap/dist/gsap";
import { useEffect } from "react";
import { perks } from "../../constants/perks";

const PerksOfJoining = () => {
  useEffect(() => {
    const perksOfJoining = gsap.context(() => {
      gsap.to(".perks", {
        y: -50,
        x: 0,
        rotate: -20,
        duration: 6,
        ease: Sine.easeInOut,
        repeat: -1,
        yoyo: true,
      });
    });

    return () => {
      perksOfJoining.revert();
    };
  }, []);
  return (
    <section className="perks-of-joining">
      <div className="container">
        <div className="heading joining-heading text-center justify-content-center">
          <h2>
            <span className="fw-bold"> Perks </span> of Joining
          </h2>
        </div>
        <div className="perks-of-joining-one d-md-flex mt-5 ">
          {perks.map((perk, index) => (
            <div
              className="perks text-center d-flex justify-content-center align-content-center"
              key={`perk-${index}`}
            >
              <div className="perks-inner">
                <div className="perks-icon">
                  <img
                    src={perk.icon}
                    width="60px"
                    height="60px"
                    className="perk"
                    alt={`${perk.title}${perk.subtitle}`}
                    loading="lazy"
                  />
                  <h2 className="perks-title pb-4 pt-1">
                    {perk.title} <br /> {perk.subtitle ? perk.subtitle : <br />}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerksOfJoining;
