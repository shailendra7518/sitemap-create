import { BannerProps } from "./Header";

const ClutchBanner: React.FC<BannerProps> = ({
  isShowBanner,
  handleCloseBanner,
}) => {
  return (
    <div
      className={`clutch-banner-container ${
        isShowBanner ? "d-block" : "d-none"
        }`}
    >
      <div className="clutch-banner-bg">
        <a
          href="http://clutch.co/profile/techstaunch"
          target="_blank"
          rel="noreferrer"
          aria-label="View TechStaunch's profile on Clutch (opens in a new tab)"
          role="link">
          <div className="d-flex justify-content-center align-items-center w-100 gap-3 ">
            <div className="d-flex flex-column clutch-banner">
              <p>
                We are proud to be recognized as one of the Top B2B Companies in
                2023
              </p>
              <hr />
            </div>
            <img
              src="/images/profile-badges/global-clutch-badge.svg"
              alt= "Clutch Global Badge"
              className="global-clutch-img"
            />
          </div>
        </a>
        <button onClick={handleCloseBanner} className="banner-close-btn">
          <img src="/images/icons/white-close.svg" alt="close-icon" />
        </button>
      </div>
    </div>
  );
};

export default ClutchBanner;
