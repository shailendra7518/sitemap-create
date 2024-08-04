import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";

const SquareWanderer: React.FC<{ secondary?: boolean }> = ({ secondary }) => {
  const squares = useRef(null);
  useEffect(() => {
    const squareWanderer = gsap.timeline().to(squares.current, {
      x: "random(-500, 500)",
      y: "random(-400, 1000)",
      duration: 3,
      ease: "none",
      repeat: -1,
      repeatRefresh: true,
    });
    return () => {
      squareWanderer.revert();
    };
  }, []);
  return (
    <div
      className={`${
        secondary ? "squares-second" : "squares"
      } p-1 p-md-2 p-lg-3 d-none d-lg-block`}
      ref={squares}
    />
  );
};

export default SquareWanderer;
