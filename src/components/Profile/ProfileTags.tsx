import React, { FC } from "react";

import ProfileTagSelect from "./ProfileTagSelect";

interface Props {
  editing: boolean;
}

const ProfileTags: FC<Props> = ({ editing }) => {
  return (
    <div className="user-tags">
      <div className="tag-group">
        <p>Expertise</p>
        <ProfileTagSelect
          defaultValue="Mergers and acquisition"
          options={[
            "Mergers and acquisition",
            "Mergers and acquisition2",
            "Mergers and acquisition3",
          ]}
          editing={editing}
        ></ProfileTagSelect>
      </div>
      <div className="tag-group">
        <p>Specialties</p>
        <ProfileTagSelect
          defaultValue="Cross border operation"
          options={[
            "Cross border operation",
            "Cross border operation2",
            "Cross border operation3",
          ]}
          editing={editing}
        ></ProfileTagSelect>
        <ProfileTagSelect
          defaultValue="Transaction over 500M€/$"
          options={[
            "Transaction over 500M€/$",
            "Transaction over 1000M€/$",
            "Transaction over 200M€/$",
          ]}
          editing={editing}
        ></ProfileTagSelect>
      </div>
      <div className="tag-group">
        <p>Admission to practice law</p>
        <ProfileTagSelect
          defaultValue="Paris bar association"
          options={[
            "Paris bar association",
            "Warsaw bar association",
            "Berlin bar association",
          ]}
          editing={editing}
        ></ProfileTagSelect>
        <ProfileTagSelect
          defaultValue="Tunisian bar association"
          options={[
            "Tunisian bar association",
            "Stockholm bar association",
            "London bar association",
          ]}
          editing={editing}
        ></ProfileTagSelect>
      </div>
      <div className="tag-group">
        <p>Countries</p>
        <ProfileTagSelect
          defaultValue="Tunisia"
          options={[
            "Tunisia",
            "Poland",
            "UK",
            "Germany",
            "Sweden",
            "Egipt",
            "Cyprus",
            "France",
            "Netherlands",
            "Mexico",
          ]}
          editing={editing}
        ></ProfileTagSelect>
      </div>
    </div>
  );
};

export default ProfileTags;
