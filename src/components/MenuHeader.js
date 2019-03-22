import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Scroll from "react-scroll";

import { activeItem } from "../actions/menuAction";

export const scrollToBottom = () => {
  let scroll = Scroll.animateScroll;
  scroll.scrollToBottom();
};

const MenuHeader = ({ active, dispatch }) => (
  <Menu
    stackable
    pointing
    inverted
    secondary
    fixed="top"
    size="massive"
    className="backgroundPurple boxShadow"
  >
    <Menu.Menu position="left">
      <Menu.Item header>ZG</Menu.Item>
    </Menu.Menu>
    <Menu.Item
      as={Link}
      to="/"
      name="home"
      active={active === "home"}
      onClick={() => dispatch(activeItem("home"))}
    />
    <Menu.Item
      as={Link}
      to="/cv"
      name="cv"
      active={active === "cv"}
      onClick={() => dispatch(activeItem("cv"))}
    />
    <Menu.Item
      as={Link}
      to="/pictures"
      name="pictures"
      active={active === "pictures"}
      onClick={() => dispatch(activeItem("pictures"))}
    />
    <Menu.Menu position="right">
    <Menu.Item
      as="a"
      href="https://www.linkedin.com/in/z%C3%A9lia-geerts-835b47134/"
      icon="linkedin"
    />
    <Menu.Item
      as="a"
      href="https://github.com/Liliatux"
      icon="github"
    />
    </Menu.Menu>
  </Menu>
);

export default MenuHeader;
