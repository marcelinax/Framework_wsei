import React, { FC } from "react";

import Icon from "../Icon";
import { IconType } from "../../types/IconType";
import moment from "moment";

interface Props {
  title: string;
  content: string;
  companyName: string;
  icon: IconType;
  contract: string;
  date: Date;
  userName: string;
  companyLogoUrl: string;
}

const ResumeWorkListItem: FC<Props> = ({
  title,
  content,
  companyName,
  icon,
  contract,
  date,
  userName,
  companyLogoUrl,
}) => {
  return (
    <div className="resume-work-item">
      <h3>{title}</h3>
      <p className="content">{content}</p>
      <div className="detalis-box">
        <img src={companyLogoUrl} alt="" className="comapany-logo" />
        <p className="company-name">{companyName}</p>•
        <Icon icon={icon} size={12}></Icon>
        <p className="contract-type">{contract}</p>•
        <p className="date">
          Updated {moment(date).fromNow()} by {userName}
        </p>
      </div>
    </div>
  );
};

export default ResumeWorkListItem;
