import React, { FC, useState } from "react";

import Icon from "../Icon";
import IconLinkButton from "../IconLinkButton";
import UserAvatar from "../UserAvatar";
import UserSelect from "../UserSelect";

const ProfilePanelInformations: FC = () => {
  const [editing, setEditing] = useState(false);

  return (
    <div className="profile-panel-informations">
      <button onClick={() => setEditing(!editing)}>EDUTYHJ TUTEJ</button>
      <h4>Panel information</h4>
      <h5>Hourly fee</h5>
      <p>69€/hour (Negociated)</p>
      <h5>T&C</h5>
      <p>Monthly10k€</p>
      <p className="file">
        <Icon icon={"file.svg"} size={16} />
        <input type="file" />
      </p>
      <h5 className="bold">S&P</h5>
      <p>Monthly10k€</p>
      <h5 className="bold">Ubter</h5>
      <p className="file file-avatar">
        <UserSelect canEdit={editing} />
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
        <UserSelect canEdit={editing} />
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
