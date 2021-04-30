import React, { FC } from "react";

import { IconType } from "../types/IconType";

interface Props {
  icon: IconType;
  size: number;
}

const Icon: FC<Props> = ({ icon, size }) => {
  return (
    <img
      src={`media/icons/${icon}`}
      alt={icon}
      width={size}
      height={size}
      className="icon"
    />
  );
};

export default Icon;
