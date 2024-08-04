import React from "react";
import { headerMenu } from "~/constants";
import ClutchBanner from "./ClutchBanner";
import HeaderMenu from "./HeaderMenu";

export interface BannerProps {
  isShowBanner: boolean;
  handleCloseBanner?: () => void;
}

const Header: React.FC<BannerProps> = ({ isShowBanner, handleCloseBanner }) => {
  return (
    <header>
      <ClutchBanner
        handleCloseBanner={handleCloseBanner}
        isShowBanner={isShowBanner}
      />
      <div className="container header-responsive">
        <HeaderMenu headerlist={headerMenu} />
      </div>
    </header>
  );
};

export default Header;
