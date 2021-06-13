import { FC } from "react";
import React from "react";
import { useState } from "react";

interface Props {
  defaultValue: string;
  options: string[];
  editing: boolean;
}

const ProfileTagSelect: FC<Props> = ({ defaultValue, editing, options }) => {
  const [value, setValue] = useState(defaultValue);

  return editing ? (
    <select
      className="tag"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {options.map((o) => (
        <option value={o}>{o}</option>
      ))}
    </select>
  ) : (
    <div className="tag">{value}</div>
  );
};

export default ProfileTagSelect;
