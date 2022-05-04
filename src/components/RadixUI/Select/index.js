import { useState } from "react";
import * as Select from "@radix-ui/react-select";
import styled from "styled-components";

const countries = { france: "🇫🇷", "united-kingdom": "🇬🇧", spain: "🇪🇸" };

const Component = () => {
  const [value, setValue] = useState("france");

  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger>
        <Select.Value aria-label={value}>{countries[value]}</Select.Value>
        <Select.Icon />
      </Select.Trigger>
      <Select.Content>
        <Select.Viewport>
          <Select.Item value="france">
            <Select.ItemText>France</Select.ItemText>
            <Select.ItemIndicator></Select.ItemIndicator>
          </Select.Item>
          <Select.Item value="united-kingdom">
            <Select.ItemText>United Kingdom</Select.ItemText>
            <Select.ItemIndicator></Select.ItemIndicator>
          </Select.Item>
          <Select.Item value="spain">
            <Select.ItemText>Spain</Select.ItemText>
            <Select.ItemIndicator></Select.ItemIndicator>
          </Select.Item>
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
};

const MySelect = styled(Component)``;

export default MySelect;
