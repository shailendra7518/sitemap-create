import React from "react";
import type { Process as ProcessProps } from "~/constants/types";

const Process: React.FC<{ processItem: ProcessProps; index: number }> = ({
  processItem,
  index,
}) => {
  return (
    <>
      <div className="process__container position-relative d-flex">
        <div className="process__number position-absolute">{`0${
          index + 1
        }`}</div>
        <div className="process__card">
          <div className="process__card-img my-2 mx-2 d-flex justify-content-end">
            <object
              className="p-2"
              data={processItem.logo}
              width="80"
              height="80"
              aria-label={`Animated ${processItem.name} Logo`}
            ></object>
          </div>
          <div className="process__card-title pt-4 ms-3" role="heading" aria-level={2}>
            {processItem.name}
          </div>
          <div className="process__card-desc pt-2 ms-3 pb-4 me-2">
            {processItem.description}
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
