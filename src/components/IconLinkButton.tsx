import React, { FC } from "react";

import { IconType } from "../types/IconType";
import { Link } from "react-router-dom";

interface Props {
  icon: IconType;
  to: string;
  title: string;
  notLink?: boolean;
  onClick?: () => void;
}

const IconLinkButton: FC<Props> = ({ icon, to, title, notLink, onClick }) => {
  const renderAsLink = () => (
    <Link to={to} className="icon-link-button">
      <img src={`media/icons/${icon}`} alt={icon} className="icon" />
      <span className="title">{title}</span>
    </Link>
  );

  const renderAsButton = () => (
    <button className="icon-link-button" onClick={onClick}>
      <img src={`media/icons/${icon}`} alt={icon} className="icon" />
      <span className="title">{title}</span>
    </button>
  );

  return notLink ? renderAsButton() : renderAsLink();
};

export default IconLinkButton;
