import React, { FC } from "react";

import IconButton from "./IconButton";
import IconLinkButton from "./IconLinkButton";
import { RootState } from "../store/rootStore";
import UserAvatar from "./UserAvatar";
import { useSelector } from "react-redux";

const UserCard: FC = () => {
  const userName = useSelector<RootState, string>(
    (store) => `${store.user.name.first} ${store.user.name.last}`
  );

  return (
    <div className="user-card">
      <div className="user-section">
        <UserAvatar width={80} height={80} />
        <p className="user-name">{userName}</p>
        <p className="desc">Job title - Company</p>
      </div>
      <hr />
      <div className="links">
        <div className="link">
          <IconLinkButton
            icon={"people.svg"}
            to="/your-network"
            title={"Your network"}
          />
          <IconButton icon={"user-plus.svg"} small={true} />
        </div>
        <div className="link">
          <IconLinkButton
            icon={"publications.svg"}
            to="/your-network"
            title={"Your Publications"}
          />
          <IconButton icon={"plus.svg"} small={true} />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
