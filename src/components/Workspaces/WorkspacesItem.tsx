import React, { FC } from "react";

import Icon from "../Icon";
import { IconType } from "../../types/IconType";
import moment from "moment";
import { url } from "node:inspector";

interface Props {
  icon: IconType;
  photoUrl: string;
  title: string;
  userCount: number;
  date: Date;
  shortcut: string;
}

const WorkspacesItem: FC<Props> = ({
  icon,
  photoUrl,
  title,
  userCount,
  date,
  shortcut,
}) => {
  return (
    <div className="workspaces-item">
      <div
        className="bg-box"
        style={{ backgroundImage: `url('${photoUrl}')` }}
      ></div>
      <div className="icon-box">
        <Icon icon={icon} size={40} />
      </div>
      <div className="info-box">
        <h3>{title}</h3>
        <div className="details-box">
          <div className="contract">
            <Icon icon={icon} size={12} />
            {shortcut}
          </div>
          •
          <div className="user-count">
            <Icon icon={icon} size={12} />
            {userCount}
          </div>
        </div>
        <p className="date">Last update {moment(date).fromNow()}</p>
      </div>
    </div>
  );
};

export default WorkspacesItem;
