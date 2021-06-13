import { FC } from "react";
import Icon from "../Icon";
import { IconType } from "../../types/IconType";
import React from "react";

interface Props {
  icon: IconType;
  title: string;
  text: string;
}

const WorkspaceCard: FC<Props> = ({ icon, text, title }) => {
  return (
    <div className="workspace-card">
      <div>
        <Icon size={30} icon={icon}></Icon>
      </div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default WorkspaceCard;
