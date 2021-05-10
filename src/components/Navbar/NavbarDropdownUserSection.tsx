import React, { FC } from "react";

import IconLinkButton from "../IconLinkButton";
import { Link } from "react-router-dom";
import { RootState } from "../../store/rootStore";
import { User } from "../../types/User";
import UserAvatar from "../UserAvatar";
import { emptyUser } from "../../defaults/emptyUser";
import { useSelector } from "react-redux";

const NavbarDropdownUserSection: FC = () => {
  const user =
    useSelector<RootState, User>((store) => store.loggedUser);

  return (
    <div className="user-section">
      <h2>Account</h2>
      <div className="account-name-box">
        <UserAvatar width={40} height={40} />
        <div className="info">
          <p className="user-name">{user.name}</p>
          <Link to="/your-profile">See profile</Link>
        </div>
      </div>
      <IconLinkButton
        icon={"privacy.svg"}
        to="/privacy"
        notLink={false}
        title="Privacy"
      />
      <IconLinkButton
        icon={"settings.svg"}
        to="/settings"
        notLink={false}
        title="Settings"
      />
      <hr></hr>
      <div className="logout-box">
        <IconLinkButton
          icon={"logout.png"}
          to=""
          notLink={true}
          title="Logout"
        />
      </div>
    </div>
  );
};

export default NavbarDropdownUserSection;
