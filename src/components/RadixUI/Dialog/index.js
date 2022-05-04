import React from "react";
import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
`;

const Content = styled.div`
  width: 300px;
  height: 300px;
  background: white;
  padding: 30;
  border-radius: 4;
`;

const Component = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>Trigger</Dialog.Trigger>
      <Dialog.Portal>
        <Overlay>
          <Content>
            <Dialog.Close>X</Dialog.Close>
            This is the content
          </Content>
        </Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Component;
