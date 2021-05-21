import React, { FC } from "react";

interface Props {
  isEdit: boolean;
  customClass?: string;
  value: string;
  setValue: (newValue: string) => void;
}

const InputAndText: FC<Props> = ({ isEdit, setValue, value, customClass }) => {
  return isEdit ? (
    <input
      className={"input-text is-input" + customClass}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  ) : (
    <p className={"input-text is-text " + customClass}>{value}</p>
  );
};

export default InputAndText;
