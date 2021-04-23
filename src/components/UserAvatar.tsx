import React, { FC } from "react";

import { RootState } from "../store/rootStore";
import { useSelector } from "react-redux";

interface Props {
  width: number;
  height: number;
}

const UserAvatar: FC<Props> = ({ height, width }) => {
  const imgSrc = useSelector<RootState, string>(
    (store) => store.user.picture.large
  );

  return (
    <img
      src={imgSrc}
      alt="User avator"
      className="user-avatar"
      width={width}
      height={height}
    />
  );
};

export default UserAvatar;
