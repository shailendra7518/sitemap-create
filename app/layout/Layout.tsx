import React, { ReactNode } from "react";
import DialogBox from "~/components/Dialog/DialogBox";
import Progress from "~/components/Progressbar";
import ScrollToAnchor from "~/helpers/ScrollToAnchor";
import Footer from "./footer/Footer";
import Header from "./header/Header";

interface LayoutProps {
  children: ReactNode;
  handleCloseBanner: () => void;
  isShowBanner: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  handleCloseBanner,
  isShowBanner,
}) => {
  return (
    <>
      <Progress />
      <Header
        handleCloseBanner={handleCloseBanner}
        isShowBanner={isShowBanner}
      />
      <ScrollToAnchor />
      <DialogBox />
      <main
        id="scroll-to-top"
        className={isShowBanner ? "main-container " : ""}
      >
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
