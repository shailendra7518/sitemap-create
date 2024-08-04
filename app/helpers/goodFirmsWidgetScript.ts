export const goodFirmsWidgetScript = () => {
  const goodFirmsScript = document.createElement("script");
  goodFirmsScript.type = "text/javascript";
  goodFirmsScript.src = "https://assets.goodfirms.co/assets/js/widget.min.js";
  goodFirmsScript.async = true;
  document.body.appendChild(goodFirmsScript);

  goodFirmsScript.onload = () => {
    window.GOODFIRMS.Init();
  };

  return () => {
    window.GOODFIRMS.Destroy();
    document.body.removeChild(goodFirmsScript);
  };
};
