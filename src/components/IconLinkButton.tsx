import React, { FC } from "react";

import { IconType } from "../types/IconType";
import { Link } from "react-router-dom";

interface Props {
  icon: IconType;
  to: string;
  title: string;
}

const IconLinkButton: FC<Props> = ({ icon, to, title }) => {
  return (
    <Link to={to} className="icon-link-button">
      <img src={`media/icons/${icon}`} alt={icon} className="icon" />
      <span className="title">{title}</span>
    </Link>
  );
};

export default IconLinkButton;
