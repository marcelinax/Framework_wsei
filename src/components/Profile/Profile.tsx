import "./profile.scss";

import React, { FC } from "react";

import ProfileAmountOfFees from "./ProfileAmountOfFees";
import ProfileInformation from "./ProfileInformation";
import ProfileInternalReviews from "./ProfileInternalReviews";
import ProfilePanelInformations from "./ProfilePanelInformations";
import ProfileProposals from "./ProfileProposals";
import ProfileTags from "./ProfileTags";

const Profile: FC = () => {
  return (
    <div className="profile">
      <ProfileInformation />
      <hr />
      <ProfileTags />
      <hr />
      <ProfilePanelInformations />
      <hr />
      <ProfileProposals />
      <hr />
      <ProfileInternalReviews />
      <hr />
      <ProfileAmountOfFees />
    </div>
  );
};

export default Profile;
