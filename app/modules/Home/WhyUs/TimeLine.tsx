import { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import AgileApproch from "~/components/Icons/Timeline/AgileApproch";
import CompanyFocus from "~/components/Icons/Timeline/CompanyFocus";
import Process from "~/components/Icons/Timeline/Process";
import useOnScrollAnimation from "~/hooks/useOnScrollAnimation";
import useOnScrollIconAnimation from "~/hooks/useOnScrollIconAnimation";

const content =
  "Our focus is the agile development of web, cloud, and mobile application - and helping organizations create and sustain digital innovation with minimal development risk.";

const agileApproch =
  "Our approach is fast, flexible, and collaborative. All TechStaunch clients have direct access to our leadership team, plus a designated product manager";

const process =
  "We create business impact via a proven approach to identify and deliver digital opportunites, using best-in-class techniques and the latest tools";
const TimeLine: React.FC = () => {
  const scrollListener = useOnScrollIconAnimation();
  useOnScrollAnimation(
    "vertical-timeline-element--work.vertical-timeline-element"
  );
  useEffect(() => {
    
    if (typeof window === "object") {
      window.addEventListener("scroll", scrollListener);
      return () => window.removeEventListener("scroll", scrollListener);
    }
  }, [scrollListener]);
  return (
    <VerticalTimeline>
      <div className="circle mx-auto"></div>
      <VerticalTimelineElement
        id="company-focus"
        className="vertical-timeline-element--work right"
        contentStyle={{
          background: "rgb(33 150 243 / 0%)",
          color: "#fff",
          boxShadow: "none",
        }}
        contentArrowStyle={{
          borderRight: "7px solid  rgb(117 154 184 / 0%)",
        }}
        date={content}
        dateClassName="content-timeline"
        // icon="1"
        iconClassName="timelineicon1"
      >
        <article className="timeline-wrapper">
          <ul className="timeline">
            <li>
              <div className="timeline-heading">
                <div className="d-flex align-items-center justify-content-start">
                  <div className="timeline-title">
                    <h2 className="py-3 ms-lg-5 mb-0 timeline_text">
                      Company Focus
                    </h2>
                  </div>
                  <div className="timeline-icon p-4">
                    <CompanyFocus />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </article>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        id="agile-approach"
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "rgb(33 150 243 / 0%)",
          color: "#fff",
          boxShadow: "none",
        }}
        contentArrowStyle={{
          borderRight: "7px solid  rgb(117 154 184 / 0%)",
        }}
        date={agileApproch}
        dateClassName="content-timeline"
        iconClassName="timelineicon2"
      >
        <article className="timeline-wrapper">
          <ul className="timeline">
            <li>
              <div className="timeline-heading">
                <div className="d-flex align-items-center justify-content-start">
                  <div className="timeline-icon p-4">
                    <AgileApproch />
                  </div>
                  <div className="timeline-title-right">
                    <h2 className="py-3 me-lg-5 mb-0 timeline_text">
                      Agile Approach
                    </h2>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </article>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        id="process"
        className="vertical-timeline-element--work right"
        contentStyle={{
          background: "rgb(33 150 243 / 0%)",
          color: "#fff",
          boxShadow: "none",
        }}
        contentArrowStyle={{
          borderRight: "7px solid  rgb(117 154 184 / 0%)",
        }}
        date={process}
        dateClassName="content-timeline"
        iconClassName="timelineicon3"
      >
        <article className="timeline-wrapper">
          <ul className="timeline">
            <li>
              <div className="timeline-heading">
                <div className="d-flex align-items-center justify-content-start">
                  <div className="timeline-title">
                    <h2 className="py-3 ms-lg-5 mb-0 timeline_text">Process</h2>
                  </div>
                  <div className="timeline-icon p-4">
                    <Process />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </article>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default TimeLine;
