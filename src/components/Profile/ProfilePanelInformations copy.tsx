import React, { FC, useState } from "react";

import Icon from "../Icon";
import IconLinkButton from "../IconLinkButton";
import ProfileInput from "./ProfileInput";
import UserSelect from "../UserSelect";

interface Props {
  toggleEditing: () => void;
}

const ProfilePanelInformations: FC<Props> = ({ toggleEditing }) => {
  const [editing, setEditing] = useState(false);

  return (
    <div className="profile-panel-informations">
      <button
        onClick={() => {
          toggleEditing();
          setEditing(!editing);
        }}
        className="edit-btn edit-btn-higher"
      >
        <img
          src="media/icons/pen-solid.svg"
          alt="edit"
          width={15}
          height={15}
        />
      </button>
      <h4>Panel informations</h4>
      <h5>Hourly fee</h5>

      <ProfileInput
        isEdit={editing}
        defaultValue="610€/hour (Negociated)"
      ></ProfileInput>

      <h5>Terms & conditions</h5>
      <ProfileInput
        isEdit={editing}
        defaultValue="Monthly 10k€ retainer - see with Jeanny Smith"
      ></ProfileInput>

      <p className="file">
        <Icon icon={"file.svg"} size={16} />
        <input type="file" />
      </p>
      <h4 className="bold">Services & projects</h4>
      <ProfileInput
        isEdit={editing}
        defaultValue="Corporate M&A and international acquistions"
      ></ProfileInput>
      <h4 className="bold">Internal correspodnants</h4>
      <p className="file file-avatar">
        <UserSelect canEdit={editing} />
        <IconLinkButton
          icon={"comment-regular.svg"}
          title={"Message"}
          to={"/"}
          notLink={true}
        />
        <IconLinkButton
          icon={"user-regular.svg"}
          title={"Profile"}
          to={"/"}
          notLink={true}
        />
      </p>
      <p className="file file-avatar">
        <UserSelect canEdit={editing} />
        <IconLinkButton
          icon={"comment-regular.svg"}
          title={"Message"}
          to={"/"}
          notLink={true}
        />
        <IconLinkButton
          icon={"user-regular.svg"}
          title={"Profile"}
          to={"/"}
          notLink={true}
        />
      </p>
    </div>
  );
};

export default ProfilePanelInformations;
