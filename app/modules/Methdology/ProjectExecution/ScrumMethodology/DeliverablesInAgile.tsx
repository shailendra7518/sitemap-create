import React from "react";
import MethodologySlider from "~/components/MethodologySlider/MethodologySlider";
import { agileDeliverables } from "~/constants/agileDeliverables";

const DeliverablesInAgile: React.FC = () => {
  return <MethodologySlider data={agileDeliverables} />;
};

export default DeliverablesInAgile;
