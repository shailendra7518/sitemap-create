import { useEffect } from "react";

const useOnScrollAnimation = (props: string) => {
  useEffect(() => {
    if (typeof document === "object") {
      const timelineItems = [...document.querySelectorAll(`.${props}`)];
      window.addEventListener("scroll", scanElements);
      function scanElements() {
        timelineItems.forEach((element) => {
          if (isVisible(element)) {
            element.classList.add("active");
          } else {
            element.classList.remove("active");
          }
        });
      }
      function isVisible(element: any) {
        const elementDiv = element.getBoundingClientRect();
        let distanceFromTop = -150;
        return elementDiv.top - window.innerHeight * 0.9 < distanceFromTop;
      }
    }
  }, [props]);
};

export default useOnScrollAnimation;
