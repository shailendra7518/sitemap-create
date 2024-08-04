import { Link } from "@remix-run/react";
import React from "react";

const NavLink: React.FC<{ href: string; classes?: string }> = ({
  children,
  classes,
  href,
  ...props
}) => {
  return (
    <Link className={classes || ""} to={href} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
