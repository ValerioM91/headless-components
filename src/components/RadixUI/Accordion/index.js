import * as Accordion from "@radix-ui/react-accordion";
import styled from "styled-components";

// Your app...
const Component = () => (
  <Accordion.Root type="single" collapsible>
    <Accordion.Item value="item1">
      <Accordion.Header>
        This is the first item header
        <Accordion.Trigger>Open</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content>This is the 1st content</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item2">
      <Accordion.Header>
        This is the second item header
        <Accordion.Trigger>Open</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content>This is the 2nd content</Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);

const MyAccordion = styled(Component)``;

export default MyAccordion;
