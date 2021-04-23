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
        <UserAvatar width={100} height={100} />
        <p className="user-name">{userName}</p>
        <p className="desc">Job title - Company</p>
      </div>
      <hr />
      <div className="links">
        <div className="link">
          <IconLinkButton
            icon={"house.svg"}
            to="/your-network"
            title={"Your network"}
          />
          <IconButton icon={"house.svg"} small={true} />
        </div>
        <div className="link">
          <IconLinkButton
            icon={"house.svg"}
            to="/your-network"
            title={"Your Publications"}
          />
          <IconButton icon={"house.svg"} small={true} />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
