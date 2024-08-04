import React, { useState } from "react";
import { allTechnologies } from "~/constants/allTechnologies";
import TechnologyIcon from "./TechnologyIcon";

const TechTabs: React.FC<{ active: number }> = ({ active }) => {
  const [tactive, setTactive] = useState<any>(active + 1);
  return (
    <section className="web-technologies">
      <div className="container">
        <div className="web-technologies-heading">
          <div className="heading text-center justify-content-center">
            <h2>
              <span className="fw-bold me-2"> Our </span> Technologies
            </h2>
          </div>
          <p className="heading-sub-title py-2 text-center">We work with</p>
        </div>
        <div className="custom-tabs">
          <ul className="custom-tabs__list" role="tablist">
            <li
              className={tactive == "1" ? "active" : ""}
              onClick={() => setTactive("1")}
              role="tab"
              aria-selected={tactive === "1" ? "true" : "false"}
              tabIndex={0}
            >
              Web
            </li>
            <li
              className={tactive == "2" ? "active" : ""}
              onClick={() => setTactive("2")}
              role="tab"
              aria-selected={tactive === "2" ? "true" : "false"}
              tabIndex={0}
            >
              Mobile
            </li>
            <li
              className={tactive == "3" ? "active" : ""}
              onClick={() => setTactive("3")}
              role="tab"
              aria-selected={tactive === "3" ? "true" : "false"}
              tabIndex={0}
            >
              DevOps
            </li>
            <li
              className={tactive == "4" ? "active" : ""}
              onClick={() => setTactive("4")}
              role="tab"
              aria-selected={tactive === "4" ? "true" : "false"}
              tabIndex={0}
            >
              UI/UX
            </li>
          </ul>
        </div>
        <div>
          <div className="technologies-icons">
            {allTechnologies.map((element, index) => (
              <TechnologyIcon
                icon={element}
                key={index}
                style={
                  tactive == element.key || element.key.includes(tactive)
                    ? ""
                    : "dull d-sm-flex d-none"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechTabs;
