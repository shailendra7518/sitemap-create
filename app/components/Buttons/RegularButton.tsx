import React from "react";

const RegularButton: React.FC<{ classes?: any; onClick?: any }> = ({
  children,
  classes,
  onClick,
}) => {
  const style = classes ? classes : "";
  return (
    <button
      className={"main-btn shadow-none " + style}
      type="submit"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RegularButton;
