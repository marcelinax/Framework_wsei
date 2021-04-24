import React, { FC } from "react";

interface Props {
  onFilter: (query: string) => void;
}

const NavbarDropdownFilter: FC<Props> = ({ onFilter }) => {
  return (
    <div className="filter">
      <input
        placeholder="Filter..."
        onChange={(e) => onFilter(e.currentTarget.value)}
      />
    </div>
  );
};

export default NavbarDropdownFilter;
