import { css } from "@emotion/react";
import React from "react";

import PricingScreen from "../Components/PricingScreen";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Pricing() {
  return <PricingScreen />;
}

export default Pricing;
