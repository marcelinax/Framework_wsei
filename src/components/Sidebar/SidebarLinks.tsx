import { DropdownLink } from "../../types/DropdownLink";
import IconLinkButton from "../IconLinkButton";
import React from "react";

const sidebarLinks: DropdownLink[] = [
  {
    icon: "house.svg",
    linkTo: "/publications",
    title: "Publications",
  },
  {
    icon: "house.svg",
    linkTo: "/ecosystem",
    title: "Ecosystem",
  },
  {
    icon: "house.svg",
    linkTo: "/entities",
    title: "Entities",
  },
];

const SidebarLinks = () => {
  return (
    <div>
      {sidebarLinks.map((link) => (
        <IconLinkButton title={link.title} icon={link.icon} to={link.linkTo} />
      ))}
    </div>
  );
};

export default SidebarLinks;
