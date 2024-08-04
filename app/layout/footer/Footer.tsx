import { MdOutlineCopyright } from "react-icons/md";
import { footerListConstant } from "~/constants";
import FooterContactSection from "./FooterContactSection/FooterContactSection";
import FooterList from "./FooterListSection/FooterList";
import FooterLogoSection from "./FooterLogoSection/FooterLogoSection";
import GlobeSection from "./GlobeSection/GlobeSection";

const Footer = () => {
  return (
    <footer className="footer-section" role="contentinfo">
      <GlobeSection />
      <div className="footer-content">
        <div className="container">
          <div className="row footer-content-inner">
            <FooterLogoSection />
            <FooterList footerlist={footerListConstant} />
            <FooterContactSection />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 py-3 text-center text-sm-start">
              <div className="copyright">
                <p className="d-flex align-items-center">
                  <MdOutlineCopyright role="presentation" />
                  <span className="text-nowrap">
                    2022 TechStaunch Software Solutions Pvt. Ltd.
                  </span>
                </p>
              </div>
            </div>
            <div className="col-sm-6 py-md-3 text-center text-md-start text-md-end">
              <div className="privacy mb-2">
                {/* <a href="">Privacy Policy</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
