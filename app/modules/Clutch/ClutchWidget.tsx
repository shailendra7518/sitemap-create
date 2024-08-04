import { useEffect } from "react";
import { clutchWidgetScript } from "~/helpers/clutchWidgetScript";

const ClutchWidget = () => {
  useEffect(() => {
    const destroyClutchScript = clutchWidgetScript();
    return destroyClutchScript();
  }, []);
  return (
    <div className="reviews-clutch-widget container">
      <div
        className="clutch-widget"
        data-url="https://widget.clutch.co"
        data-widget-type="12"
        data-height="300"
        data-nofollow="true"
        data-expandifr="true"
        data-clutchcompany-id="1666446"
        data-scale="100"
      ></div>
    </div>
  );
};

export default ClutchWidget;
