import React, { FC } from "react";

import { IconType } from "../types/IconType";

interface Props {
  icon: IconType;
  notificationAmount?: number;
  small?: boolean;
}

const IconButton: FC<Props> = ({ icon, notificationAmount = 0, small }) => {
  const renderNotificationBadge = () => (
    <span className="notification-badge">{notificationAmount.toString()}</span>
  );

  return (
    <button className={"icon-button" + (small ? " small" : "")}>
      <img src={`media/icons/${icon}`} alt={icon} />
      {notificationAmount > 0 && renderNotificationBadge()}
    </button>
  );
};

export default IconButton;
