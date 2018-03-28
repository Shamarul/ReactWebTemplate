import React, { Component } from "react";
import { scaleRotate as Menu } from "react-burger-menu";

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <a
          id="Product"
          style="display: block; outline: none;"
          className="menu-item"
          href="/"
        >
          Product
        </a>
        <a
          id="Services"
          style="display: block; outline: none;"
          className="menu-item"
          href="/about"
        >
          Services
        </a>
        <a
          id="Training"
          style="display: block; outline: none;"
          className="menu-item"
          href="/contact"
        >
          Training
        </a>
        <a
          style="display: block; outline: none;"
          onClick={this.showSettings}
          className="menu-item--small"
          href=""
        >
          Settings
        </a>
      </Menu>
    );
  }
}

<a href="" style="display: block; outline: none;">
  <i class="fa fa-fw fa-star-o" />
  <span>Favorites</span>
</a>;

export default MenuBar;
