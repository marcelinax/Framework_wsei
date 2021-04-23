import React, { FC } from "react";

import IconButton from "../IconButton";
import { IconType } from "../../types/IconType";

const buttons: { icon: IconType; notificationAmount: number }[] = [
  { icon: "house.svg", notificationAmount: 0 },
  { icon: "house.svg", notificationAmount: 3 },
  { icon: "house.svg", notificationAmount: 3 },
];

const NavbarButtons: FC = () => {
  return (
    <div className="buttons">
      {buttons.map((button) => (
        <IconButton
          icon={button.icon}
          notificationAmount={button.notificationAmount}
        />
      ))}
    </div>
  );
};

export default NavbarButtons;
