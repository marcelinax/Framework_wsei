import React, { FC } from "react";

import IconLinkButton from "../IconLinkButton";
import { Link } from "react-router-dom";
import { RootState } from "../../store/rootStore";
import UserAvatar from "../UserAvatar";
import { useSelector } from "react-redux";

const NavbarDropdownUserSection: FC = () => {
  const userName = useSelector<RootState, string>(
    (store) => `${store.user.name.first} ${store.user.name.last}`
  );

  return (
    <div className="user-section">
      <h2>Account</h2>
      <div className="account-name-box">
        <UserAvatar width={40} height={40} />
        <div className="info">
          <p className="user-name">{userName}</p>
          <Link to="/profile">See profile</Link>
        </div>
      </div>
      <IconLinkButton icon={"house.svg"} to="" notLink={true} title="Privacy" />
      <IconLinkButton
        icon={"house.svg"}
        to=""
        notLink={true}
        title="Settings"
      />
      <div className="logout-box">
        <IconLinkButton
          icon={"house.svg"}
          to=""
          notLink={true}
          title="Logout"
        />
      </div>
    </div>
  );
};

export default NavbarDropdownUserSection;
