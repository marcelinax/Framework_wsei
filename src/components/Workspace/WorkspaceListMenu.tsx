import React, { FC } from "react";

import Icon from "../Icon";

const WorkspaceListMenu: FC = () => {
  return (
    <div className="workspace-list-menu">
      <div className="top-menu">
        <h4>Latest updates</h4>
        <div className="settings-box">
          <div className="filter">
            <input type="text" placeholder="Filter by title..." />
            <img src="media/icons/search.svg" alt="search" className="icon" />
          </div>
          <div className="sort-by">
            <Icon icon={"antenna.svg"} size={20} />
            <h5>All</h5>
            <Icon icon={"arrow-down.svg"} size={10} />
          </div>
        </div>
      </div>
      <div className="bottom-menu">
        <button className="btn">All</button>
        <button className="img-btn green-btn">
          <Icon icon="entities.svg" size={10}></Icon>
          <p>SAS</p>
        </button>
        <button className="img-btn blue-btn">
          <Icon icon="entities.svg" size={10}></Icon>
          <p>SARL</p>
        </button>
        <button className="img-btn yellow-btn">
          <Icon icon="entities.svg" size={10}></Icon>
          <p>Secondary business</p>
        </button>
        <button className="img-btn grey-btn">
          <Icon icon="users-solid.svg" size={10}></Icon>
          <p>Communities</p>
        </button>
        <button className="img-btn grey-btn">
          <Icon icon="file.svg" size={10}></Icon>
          <p>POA</p>
        </button>
        <button className="img-btn light-btn">
          <Icon icon="users-solid.svg" size={10}></Icon>
          <p>Survey</p>
        </button>
        <button className="light-btn">...</button>
      </div>
    </div>
  );
};

export default WorkspaceListMenu;
