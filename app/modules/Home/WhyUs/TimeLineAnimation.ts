export const timelineItem = document.querySelector(
  ".vertical-timeline-element--work.vertical-timeline-element"
);
window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;
  // console.log(scrollTop, clientHeight);

  if (timelineItem) {
    const topElementToTopViewport = timelineItem.getBoundingClientRect().top;
    // console.log(topElementToTopViewport);

    if (scrollTop > scrollTop + topElementToTopViewport - clientHeight * 0.8) {
      timelineItem.classList.add("active");
    } 
  }
});