import React from "react";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  dir?: "next" | "prev";
  externalClass?: string;
}

const SliderArrow: React.FC<Props> = ({
  dir,
  externalClass,
  style,
  className,
  ...props
}) => {
  return (
    <img
      src={`/images/icons/final-slick-${dir === "next" ? "right" : "left"}.svg`}
      {...props}
      style={{ ...style }}
      className={`${className} ${externalClass}`}
      alt={`${dir} arrow`}
      role="button"
      tabIndex={0}
      aria-label="slide-arrow"
    />
  );
};

export default SliderArrow;
