import React, { FC } from "react";

import { Company } from "../types/Company";
import IconButton from "./IconButton";
import IconLinkButton from "./IconLinkButton";
import { RootState } from "../store/rootStore";
import { User } from "../types/User";
import UserAvatar from "./UserAvatar";
import { useSelector } from "react-redux";

const UserCard: FC = () => {
  const loggedUser = useSelector<RootState, User>((store) => store.loggedUser);
  const companies = useSelector<RootState, Company[]>(
    (store) => store.companies
  );

  return (
    <div className="user-card">
      <div className="user-section">
        <UserAvatar width={80} height={80} />
        <p className="user-name">{loggedUser.name}</p>
        <p className="desc">
          {companies.length > 0 && companies.filter((c) => c.id === 1)[0].name}
        </p>
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
            to="/your-publications"
            title={"Your Publications"}
          />
          <IconButton icon={"plus.svg"} small={true} />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
