import React, { FC, useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router";

import { DropdownLink } from "../../types/DropdownLink";
import DropdownSection from "../../types/DropdownSection";
import IconLinkButton from "../IconLinkButton";
import NavbarDropdownFilter from "./NavbarDropdownFilter";
import NavbarDropdownUserSection from "./NavbarDropdownUserSection";
import { useClickOutside } from "../../hooks/UseClickOutside";

const dropdownPlatformLinks: DropdownLink[] = [
  { icon: "house.svg", linkTo: "/", title: "Home" },
  { icon: "publications.svg", linkTo: "/publications", title: "Publications" },
  { icon: "people.svg", linkTo: "/people", title: "People" },
  { icon: "entities.svg", linkTo: "/entities", title: "Entities" },
  {
    icon: "administration.svg",
    linkTo: "/administration",
    title: "Adrministration",
  },
];

const dropdownWorkspacesLinks: DropdownLink[] = [
  { icon: "file.svg", linkTo: "/client-contract", title: "Client contract" },
  {
    icon: "file.svg",
    linkTo: "/supplier-contract",
    title: "Supplier contract",
  },
  { icon: "entities.svg", linkTo: "/corporate", title: "Corporate" },
  { icon: "book.svg", linkTo: "/group-norms", title: "Group Norms" },
  {
    icon: "file.svg",
    linkTo: "/real-estate-contracts",
    title: "Real estate contracts",
  },
];

const otherLinks: DropdownLink[] = [
  { icon: "ecosystem.svg", linkTo: "/ecosystem", title: "Ecosystem" },
  {
    icon: "people.svg",
    linkTo: "/your-network",
    title: "Your network",
  },
  {
    icon: "publications.svg",
    linkTo: "/your-publications",
    title: "Your publications",
  },
  {
    icon: "settings.svg",
    linkTo: "/settings",
    title: "Settings",
  },
  {
    icon: "privacy.svg",
    linkTo: "/privacy",
    title: "Privacy",
  },
  {
    icon: "people.svg",
    linkTo: "/your-profile",
    title: "Your profile ",
  },
];

const dropdownSections: DropdownSection[] = [
  { title: "Platform", links: dropdownPlatformLinks },
  { title: "Workspaces", links: dropdownWorkspacesLinks },
];

const NavbarDropdown: FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [filterQuery, setFilterQuery] = useState<string>("");
  const location = useLocation();
  const history = useHistory();
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => {
    setDropdownOpen(false);
  });

  const renderActiveLinkIcon = () => {
    const activeLink = location.pathname;
    let link = [
      ...dropdownPlatformLinks,
      ...dropdownWorkspacesLinks,
      ...otherLinks,
    ].filter((link) => link.linkTo === activeLink)[0] || {
      icon: "house.svg",
      linkTo: "",
      title: "Unknown link",
    };

    return (
      <div onClick={toggleDropdown}>
        <IconLinkButton
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
      </div>
    );
  };

  const renderDropdownSections = () =>
    dropdownSections
      .filter(
        (section) =>
          section.links.filter((link) =>
            link.title.toLowerCase().includes(filterQuery.toLowerCase())
          ).length > 0
      )
      .map((section) => (
        <div onClick={toggleDropdown} className="">
          <h2>{section.title}</h2>
          {section.links
            .filter((link) =>
              link.title.toLowerCase().includes(filterQuery.toLowerCase())
            )
            .map((link) => (
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
    <div className="dropdown" ref={dropdownRef}>
      {renderActiveLinkIcon()}
      {dropdownOpen && (
        <div className="dropdown-open">
          <NavbarDropdownFilter onFilter={setFilterQuery} />
          {renderDropdownSections()}
          <hr></hr>
          <NavbarDropdownUserSection />
        </div>
      )}
    </div>
  );
};

export default NavbarDropdown;
