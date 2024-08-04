import { debounce } from "lodash";

const useOnScrollIconAnimation = () => {
  const debouncedListener = debounce(scanElements, 500);
  function scanElements() {
    const verticalTimeline = document.querySelector(".vertical-timeline");
    if (!verticalTimeline) {
      return;
    }
    const activeIcons = Array.from(
      verticalTimeline.querySelectorAll(
        ".vertical-timeline-element.active .vertical-timeline-element-icon"
      )
    );
    const circle = document.querySelector(".circle") as HTMLElement;
    const lastActiveIcon = activeIcons.pop();
    if (lastActiveIcon && circle) {
      const containerPos = verticalTimeline.getBoundingClientRect();
      const iconPos = lastActiveIcon.getBoundingClientRect();
      const comparedTop = iconPos.top - containerPos.top;
      circle.style.top = `${comparedTop - 32}px`;
    } else if (!lastActiveIcon && circle) {
      circle.style.top = "0";
    }
  }
  return debouncedListener;
};
export default useOnScrollIconAnimation;
