import React, { FC } from "react";

import { IconType } from "../types/IconType";

interface Props {
  icon: IconType;
  notificationAmount: number;
}

const IconButton: FC<Props> = ({ icon, notificationAmount }) => {
  const renderNotificationBadge = () => (
    <span className="notification-badge">{notificationAmount.toString()}</span>
  );

  return (
    <button className="icon-button">
      <img src={`media/icons/${icon}`} alt={icon} />
      {notificationAmount > 0 && renderNotificationBadge()}
    </button>
  );
};

export default IconButton;
