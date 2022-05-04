import styled from "styled-components";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

function Component({ className }) {
  let [plan, setPlan] = useState("startup");

  return (
    <RadioGroup value={plan} onChange={setPlan} className={className}>
      <RadioGroup.Label>CHOOSE PLAN</RadioGroup.Label>
      <RadioGroup.Option value="startup">
        {({ checked }) => (
          <span className={checked ? "checked" : ""}>Startup</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="business">
        {({ checked }) => (
          <span className={checked ? "checked" : ""}>Business</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="enterprise">
        {({ checked }) => (
          <span className={checked ? "checked" : ""}>Enterprise</span>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  );
}

const RadioSelect = styled(Component)`
  .checked {
    background-color: blanchedalmond;
  }
`;

export default RadioSelect;
