import styled from "styled-components";
import { Disclosure as HeadlessDisclosure } from "@headlessui/react";

function Component({ className }) {
  return (
    <div className={className}>
      <HeadlessDisclosure>
        <HeadlessDisclosure.Button>
          Is team pricing available?
        </HeadlessDisclosure.Button>
        <HeadlessDisclosure.Panel>
          Yes! You can purchase a license that you can share with your entire
          team.
        </HeadlessDisclosure.Panel>
      </HeadlessDisclosure>
    </div>
  );
}

const Disclosure = styled(Component)``;

export default Disclosure;
