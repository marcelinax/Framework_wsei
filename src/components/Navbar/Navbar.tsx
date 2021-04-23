import "./navbar.scss";

import React, { FC } from "react";

import NavbarButtons from "./NavbarButtons";
import NavbarDropdown from "./NavbarDropdown";
import NavbarLogo from "./NavbarLogo";
import NavbarSearch from "./NavbarSearch";

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-flex">
        <NavbarLogo />
        <NavbarDropdown />
        <NavbarSearch />
        <NavbarButtons />
      </div>
    </nav>
  );
};

export default Navbar;
