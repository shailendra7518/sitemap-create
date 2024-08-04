import { useEffect } from "react";
import { clutchWidgetScript } from "~/helpers/clutchWidgetScript";

const ClutchReview = () => {
  useEffect(() => {
    const destroyClutchScript = clutchWidgetScript();
    return destroyClutchScript();
  }, []);

  return (
    <div className="clutch-review-container container">
      <div className="clutch-review-container-1">
        <div className="clutch-review-img-container-1">
          <img
            src="/images/clutch-review/clutch-rating.svg"
            alt="Clutch Rating Image"
            className="clutch-review-img-1"
            loading="lazy"
          />
        </div>
        <div className="clutch-review-img-container-2">
          <img
            src="/images/clutch-review/clutch-refer.svg"
            alt="Clutch Refer Image"
            className="clutch-review-img-2"
            loading="lazy"
          />
        </div>
      </div>

      <div className="clutch-reviews-widget">
        <div
          className="clutch-widget"
          data-url="https://widget.clutch.co"
          data-widget-type="2"
          data-height="45"
          data-nofollow="true"
          data-expandifr="true"
          data-clutchcompany-id="1666446"
        ></div>
      </div>
      <div className="clutch-review-container-2">
        <img
          src="/images/clutch-review/clutch-animation.gif"
          className="clutch-review-animation"
          alt="Clutch Animation"
          loading="lazy"
        />
      </div>
      <div className="clutch-review-container-3">
        <img
          src="/images/clutch-review/clutch-success.svg"
          className="clutch-review-img clutch-review-success-rating-img"
          alt="Clutch Success Image"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ClutchReview;
