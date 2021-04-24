import { DropdownLink } from "../../types/DropdownLink";
import IconLinkButton from "../IconLinkButton";
import React from "react";

const sidebarLinks: DropdownLink[] = [
  {
    icon: "publications.svg",
    linkTo: "/publications",
    title: "Publications",
  },
  {
    icon: "ecosystem.svg",
    linkTo: "/ecosystem",
    title: "Ecosystem",
  },
  {
    icon: "entities.svg",
    linkTo: "/entities",
    title: "Entities",
  },
];

const SidebarLinks = () => {
  return (
    <div className="sidebar-links">
      {sidebarLinks.map((link) => (
        <IconLinkButton title={link.title} icon={link.icon} to={link.linkTo} />
      ))}
    </div>
  );
};

export default SidebarLinks;
