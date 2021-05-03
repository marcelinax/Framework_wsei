import React, { FC } from "react";

import Icon from "../Icon";
import IconLinkButton from "../IconLinkButton";
import UserAvatar from "../UserAvatar";

const ProfilePanelInformations: FC = () => {
  return (
    <div className="profile-panel-informations">
      <h4>Panel information</h4>
      <h5>Hourly fee</h5>
      <p>69€/hour (Negociated)</p>
      <h5>T&C</h5>
      <p>Monthly10k€</p>
      <p className="file">
        <Icon icon={"file.svg"} size={16} />
        File name
      </p>
      <h5 className="bold">S&P</h5>
      <p>Monthly10k€</p>
      <h5 className="bold">Ubter</h5>
      <p className="file file-avatar">
        <UserAvatar height={26} width={26} />
        File name
        <IconLinkButton
          icon={"file.svg"}
          title={"Message"}
          to={"/"}
          notLink={true}
        />
        <IconLinkButton
          icon={"file.svg"}
          title={"Message"}
          to={"/"}
          notLink={true}
        />
      </p>
      <p className="file file-avatar">
        <UserAvatar height={26} width={26} />
        File name
        <IconLinkButton
          icon={"file.svg"}
          title={"Message"}
          to={"/"}
          notLink={true}
        />
        <IconLinkButton
          icon={"file.svg"}
          title={"Message"}
          to={"/"}
          notLink={true}
        />
      </p>
    </div>
  );
};

export default ProfilePanelInformations;
