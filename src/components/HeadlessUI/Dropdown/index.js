import styled from "styled-components";
import { Menu } from "@headlessui/react";

function Component({ className }) {
  return (
    <nav className={className}>
      <Menu>
        <Menu.Button>More</Menu.Button>
        <Menu.Items>
          <Menu.Item>
            <a href="/account-settings">Account settings</a>
          </Menu.Item>
          <Menu.Item>
            <a href="/account-settings">Documentation</a>
          </Menu.Item>
          <Menu.Item disabled>
            <span>Invite a friend (coming soon!)</span>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </nav>
  );
}

const Dropdown = styled(Component)``;

export default Dropdown;
