import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const widgets = gsap.utils.selector(aboutRef);
    const tsx = gsap.context(() => {
      widgets(".why-us-widget").map((element) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            toggleActions: "play none none reset",
          },
          ease: "easeOut",
          duration: 0.5,
          opacity: 0.5,
          y: 150,
        });
      });
    });

    return () => {
      tsx.revert();
    };
  }, []);

  return (
    <section className="why-us" ref={aboutRef}>
      <div className="container">
        <div className="why-us-heading heading text-center py-sm-5 py-0">
          <h2>
            <span className="fw-bold me-2">Why </span>Us
            <img
              src="/images/question-mark.svg"
              alt="question-mark"
              width="85px"
              height="114px"
              loading="lazy"
            />
          </h2>
        </div>
        <div className="d-flex justify-content-center flex-column align-items-center px-2">
          <div className="About-detail text-white text-center pb-3">
            <h3>
              "Making your journey hassle-free and your outcomes extraordinary"
            </h3>
            <p>
              Elevate your operations as we deliver unparalleled digital
              solutions, allowing you to concentrate on your core vision.
            </p>
          </div>
        </div>
        <div className="row justify-content-end my-5 mb-lg-4">
          <div className=" col-lg-6 col-md-7 why-us-widget d-flex align-items-center justify-content-center ">
            <div className="why-us-icon p-sm-4 p-3 me-5 mb-4">
              <img
                src="/images/icons/product-mindset.svg"
                width="58px"
                height="55px"
                alt="product-mindset"
                loading="lazy"
              />
            </div>
            <div className="why-us-title-box-right mt-auto position-relative">
              <h2 className="why-us-title-right m-0 py-2 py-sm-3 pe-5">
                product-mindset
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-start mb-5 mb-lg-4">
          <div className=" col-md-6 why-us-widget d-flex justify-content-center position-relative">
            <div className="why-us-title-box mt-auto">
              <h2 className="why-us-title m-0 py-1">
                Design Sprint <br /> Methodology
              </h2>
            </div>
            <div className="why-us-icon p-sm-4 p-3 ms-5 mb-4">
              <img
                src="/images/icons/sprint-methodology.svg"
                width="45px"
                height="55px"
                alt="sprint-methodology"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="row justify-content-end mb-5 mb-lg-4">
          <div className=" col-lg-6 col-md-7 why-us-widget d-flex align-items-center justify-content-center ">
            <div className="why-us-icon p-sm-4 p-3 me-5 mb-4">
              <img
                src="/images/icons/rnd-lab.svg"
                width="63px"
                height="54px"
                alt="Research & Development"
                loading="lazy"
              />
            </div>
            <div className="why-us-title-box-right mt-auto position-relative">
              <h2 className="why-us-title-right m-0 py-2 py-sm-3 pe-5">
                RnD Lab
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-start  mb-5 mb-lg-4">
          <div className=" col-md-6 why-us-widget d-flex justify-content-center position-relative">
            <div className="why-us-title-box mt-auto">
              <h2 className="why-us-title m-0 py-3">Partner Attitude</h2>
            </div>
            <div className="why-us-icon p-sm-4 p-3 ms-5 mb-4">
              <img
                src="/images/icons/partner-attitude.svg"
                width="52px"
                height="53px"
                alt="partner-attitude"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="row justify-content-end mb-5 mb-lg-4">
          <div className=" col-lg-6 col-md-7 why-us-widget d-flex align-items-center justify-content-center ">
            <div className="why-us-icon p-sm-4 p-3 me-5 mb-4">
              <img
                src="/images/icons/qualified-team.svg"
                width="59px"
                height="52px"
                alt="qualified-team"
                loading="lazy"
              />
            </div>
            <div className="why-us-title-box-right mt-auto position-relative">
              <h2 className="why-us-title-right m-0 py-3 py-sm-3 pe-5">
                Qualified Team
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
