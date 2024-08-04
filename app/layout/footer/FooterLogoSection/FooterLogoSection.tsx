import { Link } from "@remix-run/react";
import { BsFillTelephoneFill, BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import Clutch from "./Clutch";

const FooterLogoSection = () => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-12 text-center footer-logo-column">
      <div className="col-logo">
        <div className="footer-logo">
          <Link to="/">
            <img
              src="/images/techStaunch-footer-logo.svg"
              alt="techStaunch-logo"
              width="222"
              height="177"
              loading="lazy"
            />
          </Link>
          <div className="tagline-text pt-sm-5 pt-2">
            <p>Passionate to code your success</p>
          </div>
        </div>
        <div className="footer-social-icon pt-md-0 pt-2">
          <span
            className="social-heading d-none d-sm-block"
            role="heading"
            aria-level={3}
          >
            Follow us
          </span>
          <span className="social-heading d-block d-sm-none">
            Connect with us
          </span>
          <ul className="list-unstyled d-flex flex-row justify-content-center py-2 px-0">
            <li className="px-sm-2 px-1">
              <a
                target="blank"
                className="px-2 social-icon"
                href="https://www.linkedin.com/company/techstaunch"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="px-sm-2 px-1">
              <a
                target="blank"
                className="px-2 social-icon"
                href="https://twitter.com/TechStaunch"
                aria-label="Twitter"
              >
                <BsTwitterX />
              </a>
            </li>
            <li className="px-sm-2 px-1">
              <a
                target="blank"
                className="px-2 social-icon"
                href="https://www.facebook.com/TechStaunch"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="px-2 px-md-1">
              <a
                target="blank"
                className="px-2 social-icon"
                href="http://clutch.co/profile/techstaunch"
                aria-label="Clutch"
              >
                <Clutch />
              </a>
            </li>
            <li className="px-2 ps-3 px-md-1 d-block d-sm-none">
              <a
                className="px-2 social-icon"
                href="tel:+918780173037"
                aria-label="Phone"
              >
                <BsFillTelephoneFill />
              </a>
            </li>
            <li className="px-sm-2 px-1 d-block d-sm-none">
              <a
                className="px-2 social-icon"
                href="mailto:info@techstaunch.com"
                aria-label="Mail"
              >
                <TbMailFilled />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a
            href="//www.dmca.com/Protection/Status.aspx?ID=01cfbac1-fef5-4bed-8e72-6aed714338c5"
            title="DMCA.com Protection Status"
          >
            <img
              src="https://images.dmca.com/Badges/dmca-badge-w150-5x1-02.png?ID=01cfbac1-fef5-4bed-8e72-6aed714338c5"
              alt="DMCA Badge"
              width={150}
              height={30}
              loading="lazy"
            />
          </a>
        </div>
      </div>
      <script
        defer
        src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"
      ></script>
    </div>
  );
};

export default FooterLogoSection;
