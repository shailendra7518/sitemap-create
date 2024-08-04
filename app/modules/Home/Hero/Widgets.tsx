import { useEffect } from "react";
import { clutchWidgetScript } from "~/helpers/clutchWidgetScript";
import { goodFirmsWidgetScript } from "~/helpers/goodFirmsWidgetScript";

const Widgets = () => {
  useEffect(() => {
    const destroyClutchScript = clutchWidgetScript();
    const destroyGoodFirmsScript = goodFirmsWidgetScript();
    return () => {
      destroyClutchScript();
      destroyGoodFirmsScript();
    };
  }, []);

  return (
    <div className="footer-widgets mt-5 d-flex flex-column flex-sm-row gap-sm-0 gap-4 justify-content-center align-items-center py-5">
      <div className="d-flex align-items-center m-auto m-sm-0">
        <div
          className="goodfirm-widget"
          data-widget-type="goodfirms-widget-t8"
          data-widget-pattern="poweredby-star"
          data-height="60"
          data-company-id="71915"
        ></div>
      </div>
      <div className="d-flex m-auto m-sm-0 align-items-center">
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
    </div>
  );
};

export default Widgets;
