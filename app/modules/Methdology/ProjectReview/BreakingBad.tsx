import React from "react";
import { breakingBad } from "~/constants/brekingBad";
import AlternateWithPoints from "~/components/AlternateSide/AlternateWithPoints";
import EchoMeeting from "./EchoMeeting";

const BreakingBad = () => {
  return (
    <section className="breaking-bad">
      <div className="container">
        <div className="heading text-center py-5">
          <h2>
            <span className="fw-bold"> Breaking </span> Bad
          </h2>
        </div>
        <p className="heading-sub-title text-capitalize">
          The myths that exist for an offshore team
        </p>
        <AlternateWithPoints data={breakingBad} numbers={false} />
        <EchoMeeting />
      </div>
    </section>
  );
};

export default BreakingBad;
