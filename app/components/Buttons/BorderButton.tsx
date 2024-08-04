import React from "react";

const BorderButton: React.FC<{ classes?: any; onClick?: any }> = ({
  children,
  classes,
  onClick,
}) => {
  const style = classes ? classes : "";
  return (
    <button
      className={"sec-btn shadow-none " + style}
      type="submit"
      onClick={onClick}
    >
      <span className="sec-btn-text">{children}</span>
    </button>
  );
};

export default BorderButton;
