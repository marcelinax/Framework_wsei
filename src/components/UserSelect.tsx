import React, { FC, useState } from "react";

import Icon from "./Icon";
import { Photo } from "../types/Photo";
import { RootState } from "../store/rootStore";
import { User } from "../types/User";
import { useSelector } from "react-redux";

interface Props {
  canEdit: boolean;
}

const UserSelect: FC<Props> = ({ canEdit }) => {
  const [selectedUser, setSelectedUser] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const users = useSelector<RootState, User[]>((store) => store.users);
  const photos = useSelector<RootState, Photo[]>((store) => store.photos);

  return photos.length > 0 && users.length > 0 ? (
    <div
      className="user-select"
      onClick={() => {
        canEdit && setExpanded(!expanded);
      }}
    >
      <img
        src={photos[selectedUser].url}
        alt="dupsko"
        width={26}
        height={26}
        className="user-avatar"
      />
      {users[selectedUser].name}
      {canEdit && <Icon icon={"arrow-down.svg"} size={13}></Icon>}
      {expanded && (
        <div className="user-select-dropdown">
          {users.map((user) => (
            <div
              onClick={() => {
                setSelectedUser(user.id - 1);
              }}
            >
              <img
                src={photos[user.id - 1].url}
                alt="dupa"
                width={26}
                height={26}
                className="user-avatar"
              />
              {user.name}
            </div>
          ))}
        </div>
      )}
    </div>
  ) : (
    <></>
  );
};

export default UserSelect;
