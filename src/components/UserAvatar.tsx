import React, { FC } from "react";

import { Photo } from "../types/Photo";
import { RootState } from "../store/rootStore";
import { User } from "../types/User";
import { emptyPhoto } from "../defaults/emptyPhoto";
import { useSelector } from "react-redux";

interface Props {
  width: number;
  height: number;
}

const UserAvatar: FC<Props> = ({ height, width }) => {
  const loggedUser = useSelector<RootState, User>((store) => store.loggedUser);
  const userPhotoUrl =
    useSelector<RootState, Photo>(
      (store) => store.photos.filter((p) => p.id === loggedUser.id)[0]
    ) || emptyPhoto;

  return (
    <img
      src={userPhotoUrl.url}
      alt="User avator"
      className="user-avatar"
      width={width}
      height={height}
    />
  );
};

export default UserAvatar;
