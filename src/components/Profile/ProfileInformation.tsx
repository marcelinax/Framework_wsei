import React, { FC } from "react";

import { Link } from "react-router-dom";
import { RootState } from "../../store/rootStore";
import { User } from "../../types/User";
import UserAvatar from "../UserAvatar";
import { useSelector } from "react-redux";

const ProfileInformation: FC = () => {

  const user =
    useSelector<RootState, User>((store) => store.loggedUser);

  return (
    <div className="profile-information">
      <div className="options"></div>
      <div className="profile-box">
        <div className="user">
          <UserAvatar height={80} width={80}></UserAvatar>
          <Link to="/your-profile">See profile</Link>
        </div>
        <div className="user-information">
          <div className="user-information-left">
            <p className="name">{user.name}</p>
            <p className="company">{user.company.name}</p>
            <p className="city">{user.address.city}</p>
            <p className="position">{user.address.suite}</p>
          </div>
          <div className="user-information-right">
            <p className="email">{user.email}</p>
            <p className="number-phone">{user.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
