export const clutchWidgetScript = () => {
  // Load the Clutch widget script
  const clutchScript = document.createElement("script");
  clutchScript.type = "text/javascript";
  clutchScript.src = "https://widget.clutch.co/static/js/widget.js";
  clutchScript.async = true;
  document.body.appendChild(clutchScript);

  clutchScript.onload = () => {
    window.CLUTCHCO.Init();
  };

  return () => {
    if (window?.CLUTCHCO.loaded) {
      window?.CLUTCHCO?.Destroy();
      document?.body?.removeChild(clutchScript);
    }
  };
};
