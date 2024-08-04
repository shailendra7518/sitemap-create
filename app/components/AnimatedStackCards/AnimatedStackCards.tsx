import gsap from "gsap/dist/gsap";
import { useEffect, useRef } from "react";
import { urlFor } from "~/root";

interface AnimatedStackCardsProps {
  data: { images: any };
}

const AnimatedStackCards = ({ data }: AnimatedStackCardsProps) => {
  const pageRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cardSelector = gsap.utils.selector(pageRef);
    const clickables = cardSelector(".post-clickable");
    const cards = cardSelector(".card");
    const spacing = cards.length;

    const time = spacing * (cards.length - 1);

    const cardAnimation = (card: any) => {
      return gsap
        .timeline()
        .set(
          card,
          {
            y: -230,
            x: 150,
            scale: 0.8,
            zIndex: 10,
            autoAlpha: 1,
            immediateRender: false,
          },
          0
        )
        .to(
          card,
          {
            y: 0,
            scale: 1.5,
            zIndex: 100,
            ease: "none",
            duration: spacing,
            immediateRender: false,
            x: 0,
          },
          spacing
        )
        .to(card, {
          autoAlpha: 0,
          duration: spacing,
          ease: "none",
          y: -150,
          x: -120,
          scale: 0.8,
          opacity: 0.8,
          repeat: cards.length - 3,
        })
        .repeat(-1);
    };

    const buildSeamlessLoop = () => {
      const rawSequence = gsap.timeline({ paused: true });

      cards.map((card, i) => {
        const anim = cardAnimation(card);
        rawSequence.add(anim, i * spacing);
      });

      return rawSequence;
    };

    const loop = buildSeamlessLoop();
    loop.time(time);

    const movePlayhead = () => {
      if (time < 0) {
        loop.totalTime(loop.totalTime() + spacing);
      }
      if (loop.time() % cards.length !== 0) {
        const timeFloor = Math.ceil(loop.time() / cards.length) * spacing;
        gsap.to(loop, { totalTime: timeFloor + spacing });
        return;
      } else {
        gsap.to(loop, { totalTime: "+=" + spacing });
      }
    };

    const moveCircle = (e: any) => {
      gsap.to(buttonRef.current, 0.25, {
        css: {
          left: e.pageX,
          top: e.pageY - window.scrollY,
        },
      });
    };

    pageRef.current?.addEventListener("click", movePlayhead);
    pageRef.current?.addEventListener("mousemove", moveCircle);

    const clickableContext = gsap.context(() => {
      clickables.map((clickable) => {
        clickable.addEventListener("mouseover", () => {
          gsap.to(buttonRef.current, 0.25, {
            scale: 1,
            autoAlpha: 1,
          });
        });

        clickable.addEventListener("mouseout", () => {
          gsap.to(buttonRef.current, 0.25, { scale: 0.5, autoAlpha: 0 });
        });

        clickable.addEventListener("mousedown", () => {
          gsap.to(buttonRef.current, 0.5, {
            css: { transform: "translate(-50%, -50%) scale(0.75)" },
          });

          gsap.to(buttonTextRef.current, 0.25, {
            css: { opacity: 1 },
          });
        });

        clickable.addEventListener("mouseup", () => {
          gsap.to(buttonRef.current, 1, { css: { background: "transparent" } });

          gsap.to(buttonRef.current, 0.5, {
            css: { transform: "translate(-50%, -50%) scale(1)" },
          });

          gsap.to(buttonTextRef.current, 0.25, { css: { opacity: 1 } });
        });
      });
    });

    return () => {
      loop.revert();

      clickables.map((clickable) => {
        clickable.removeEventListener("mouseover", () => {
          gsap.to(buttonRef.current, 0.25, {
            scale: 1,
            autoAlpha: 1,
          });
        });

        clickable.removeEventListener("mouseout", () => {
          gsap.to(buttonRef.current, 0.25, { scale: 0.5, autoAlpha: 0 });
        });

        clickable.removeEventListener("mousedown", () => {
          gsap.to(buttonRef.current, 0.5, {
            css: { transform: "translate(-50%, -50%) scale(0.75)" },
          });

          gsap.to(buttonTextRef.current, 0.25, {
            css: { opacity: 1 },
          });
        });

        clickable.removeEventListener("mouseup", () => {
          gsap.to(buttonRef.current, 1, { css: { background: "transparent" } });

          gsap.to(buttonRef.current, 0.5, {
            css: { transform: "translate(-50%, -50%) scale(1)" },
          });

          gsap.to(buttonTextRef.current, 0.25, { css: { opacity: 1 } });
        });
      });

      clickableContext.revert();

      pageRef.current?.removeEventListener("click", movePlayhead);
      pageRef.current?.removeEventListener("mousemove", moveCircle);
    };
  }, []);

  const images = data.images;

  return (
    <div className="section-1">
      <div className="panel">
        <div className="posts" id="card-container" ref={pageRef}>
          <div className="post-clickable image-box">
            {images.map((image: any, index: number) => (
              <div className="card" key={index}>
                {image && (
                  <img
                    className="img-fluid"
                    width="500"
                    height="400"
                    src={urlFor(image).url()}
                    alt={"company-image-" + index}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <button className="button" ref={buttonRef}>
          <span className="button-text" ref={buttonTextRef}>
            <img
              src="/images/icons/stack-slider-arrow.svg"
              className="animated-card-arrow"
              width="56px"
              height="56px"
              alt="arrow"
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default AnimatedStackCards;
