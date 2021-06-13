import "./workspace.scss";

import { FC } from "react";
import Icon from "../Icon";
import IconButton from "../IconButton";
import { IconType } from "../../types/IconType";
import React from "react";

interface Props {
  title: string;
  icon: IconType;
}

const WorkspaceHello: FC<Props> = ({ icon, title }) => {
  return (
    <div className="workspace-hello">
      <div className="image"></div>
      <div className="text">
        <Icon icon={icon} size={50}></Icon>
        <div>
          <h3>{title}</h3>
          <p>
            Workspace purpose and a bit of context. This much needed description
            is here to remmind people where they are, if they are new or have
            poor memory.
          </p>
        </div>
        <div className="settings">
          <IconButton icon={"settings.svg"}></IconButton>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceHello;
