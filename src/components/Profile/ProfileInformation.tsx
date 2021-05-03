import React, { FC } from "react";

import { Link } from "react-router-dom";
import UserAvatar from "../UserAvatar";

const ProfileInformation: FC = () => {
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
            <p className="name">Humberta Swift</p>
            <p className="company">Clifford Chance</p>
            <p className="city">New-york</p>
            <p className="position">partner</p>
          </div>
          <div className="user-information-right">
            <p className="email">dupamaryna@super-mail.pl.com</p>
            <p className="number-phone">+33 (0)6 69 69 69 69</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
