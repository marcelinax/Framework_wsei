import "./profile.scss";

import React, { FC, useState } from "react";

import ProfileAmountOfFees from "./ProfileAmountOfFees";
import ProfileInformation from "./ProfileInformation";
import ProfileInternalReviews from "./ProfileInternalReviews";
import ProfilePanelInformations from "./ProfilePanelInformations";
import ProfileProposals from "./ProfileProposals";
import ProfileTags from "./ProfileTags";

const Profile: FC = () => {
  const [editing, setEditing] = useState(false);

  return (
    <div className="profile">
      <ProfileInformation />
      <hr />
      <ProfileTags editing={editing} />
      <hr />
      <ProfilePanelInformations toggleEditing={() => setEditing(!editing)} />
      <hr />
      <ProfileProposals editing={editing} />
      <hr />
      <ProfileInternalReviews editing={editing} />
      <hr />
      <ProfileAmountOfFees editing={editing} />
    </div>
  );
};

export default Profile;
