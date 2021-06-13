import React, { FC, useState } from "react";

interface Props {
  isEdit: boolean;
  customClass?: string;
  defaultValue: string;
}

const ProfileTableInput: FC<Props> = ({
  isEdit,
  defaultValue,
  customClass,
}) => {
  const [value, setValue] = useState(defaultValue);

  return isEdit ? (
    <input
      className={"input-text is-input" + customClass}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  ) : (
    <>{value}</>
  );
};

export default ProfileTableInput;
