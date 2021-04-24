import React, { FC, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";

import { DropdownLink } from "../../types/DropdownLink";
import DropdownSection from "../../types/DropdownSection";
import IconLinkButton from "../IconLinkButton";
import NavbarDropdownUserSection from "./NavbarDropdownUserSection";

const dropdownPlatformLinks: DropdownLink[] = [
  { icon: "house.svg", linkTo: "/", title: "Home" },
  { icon: "house.svg", linkTo: "/dupa", title: "Dupa" },
  { icon: "house.svg", linkTo: "/", title: "Home" },
  { icon: "house.svg", linkTo: "/", title: "Home" },
  { icon: "house.svg", linkTo: "/", title: "Home" },
];

const dropdownWorkspacesLinks: DropdownLink[] = [
  { icon: "house.svg", linkTo: "/", title: "Client contract" },
  { icon: "house.svg", linkTo: "/", title: "Client contract" },
  { icon: "house.svg", linkTo: "/", title: "Client contract" },
  { icon: "house.svg", linkTo: "/", title: "Client contract" },
  { icon: "house.svg", linkTo: "/", title: "Client contract" },
];

const dropdownSections: DropdownSection[] = [
  { title: "Platform", links: dropdownPlatformLinks },
  { title: "Workspaces", links: dropdownWorkspacesLinks },
];

const NavbarDropdown: FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const location = useLocation();
  const history = useHistory();

  const renderActiveLinkIcon = () => {
    const activeLink = location.pathname;
    let link = [...dropdownPlatformLinks, ...dropdownWorkspacesLinks].filter(
      (link) => link.linkTo === activeLink
    )[0] || { icon: "house.svg", linkTo: "", title: "Unknown link" };

    return (
      <>
        <IconLinkButton
          onClick={toggleDropdown}
          notLink={true}
          icon={link.icon}
          to={link.linkTo}
          title={link.title}
        />
        <img
          src="media/icons/arrow-down.svg"
          className="dropdown-open-arrow"
          alt="Arrow down dropdown"
        />
      </>
    );
  };

  const renderDropdownSections = () =>
    dropdownSections.map((section) => (
      <div onClick={toggleDropdown}>
        <h2>{section.title}</h2>
        {section.links.map((link) => (
          <IconLinkButton
            icon={link.icon}
            to={link.linkTo}
            title={link.title}
          />
        ))}
      </div>
    ));

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    history.listen(() => {
      setDropdownOpen(false);
    });
  }, []);

  return (
    <div className="dropdown">
      {renderActiveLinkIcon()}
      {dropdownOpen && (
        <div className="dropdown-open">
          {renderDropdownSections()}
          <NavbarDropdownUserSection />
        </div>
      )}
    </div>
  );
};

export default NavbarDropdown;
