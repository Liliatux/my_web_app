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
      name="accueil"
      active={active === "accueil"}
      onClick={() => dispatch(activeItem("accueil"))}
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
      to="/blog"
      name="blog"
      active={active === "blog"}
      onClick={() => dispatch(activeItem("blog"))}
    />
    <Menu.Menu position="right">
      <Menu.Item name="contact" onClick={scrollToBottom} />
    </Menu.Menu>
  </Menu>
);

export default MenuHeader;
