import "./sidebar.scss";

import React, { FC } from "react";

import SidebarLinks from "./SidebarLinks";
import UserCard from "../UserCard";

const Sidebar: FC = () => {
  return (
    <div className="sidebar">
      <UserCard />
      <SidebarLinks />
    </div>
  );
};

export default Sidebar;
